/** * @description 左侧目录中的目录树 */
<template>
  <div class="m-sheet-trees">
    <a-tree
      :tree-data="treeData"
      :replaceFields="{
        children: 'children',
        title: 'name',
        key: 'data_id',
        slots: 'slots'
      }"
      @select="selectNodeHandler"
      selectable
      draggable
      showIcon
      switcherIcon
      :expandedKeys="expandedKeys"
      :selectedKeys="selectedKeys"
    >
      <!-- 展开/折叠图标 -->
      <template slot="folderIcon">
        <a-icon theme="twoTone" type="folder" />
      </template>
      <!-- 标题、三个点 -->
      <template slot="name" slot-scope="item">
        <img
          title="api数据源"
          src="../../../../assets/data-sheet/api-sjy.svg"
          v-if="item.source === 11"
        />
        <span
          style="
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
          "
          :title="item.name"
        >
          <span class="m-item-name">{{ item.name }}</span>
        </span>
      </template>
    </a-tree>
  </div>
</template>

<script>
export default {
  name: 'sheetTrees',

  /**
   * @type data
   * treeData 目录树数据
   */
  data() {
    return {
      treeData: [],
      targetPid: '', // 移动后的父级id
      targetOrderIndex: '', // 移动后的index
      ifDragIn: null, // 是否可以拖拽到里面
      expandedKeys: [], // 存放展开指定的树节点
      clickNodeId: '', // 点击节点data_id
      selectedKeys: [] // 选中的树节点
    }
  },

  async created() {
    // 获取目录树根数据
    await this.getTreesRootData()
  },

  methods: {
    // 点击终点节点显示对应表
    selectNodeHandler(selectedKeys, e) {
      this.selectedKeys = selectedKeys
      // 1. 获取数据 push children
      // 2. 折叠
      const includesKeys = this.expandedKeys
      // 展开关闭文件夹
      this.clickNodeId = e.node.dataRef.data_id
      const ifExpandedKeys = includesKeys.findIndex((item) => item === this.clickNodeId)
      if (ifExpandedKeys === -1) {
        this.expandedKeys = [...includesKeys, this.clickNodeId]
      } else {
        this.expandedKeys.splice(ifExpandedKeys, 1)
      }

      var nodeData = e.node.dataRef
      if (nodeData.source === 0) {
        // 点击文件夹
        this.getTreesRootData(nodeData)
      } else {
        // 点击最后的子节点，改变视图
        // this.$emit('menuclick')
      }
    },
    recursionData(treeData, nodeData, data) {
      for (let i = 0; i < treeData.length; i++) {
        if (nodeData.data_id === treeData[i].data_id) {
          treeData[i].children = data.map((item) => {
            if (item.source !== 0) {
              return {
                ...item,
                scopedSlots: { title: 'name' }
              }
            }
            // 为文件夹
            return {
              ...item,
              scopedSlots: { icon: 'folderIcon', title: 'name' },
              children: []
            }
          })
        } else {
          if (treeData[i].children) {
            this.recursionData(treeData[i].children, nodeData, data)
          }
        }
      }
    },
    // 获取目录树根数据
    async getTreesRootData(nodeData) {
      let dataId = nodeData ? nodeData.data_id : null
      const res = await this.$API.getWorktable(dataId)
      if (res) {
        let data = res.data.data
        for (let i = 0; i < data.length; i++) {
          data[i].scopedSlots = { title: 'name' }
        }
        if (!nodeData) {
          // 第一次请求
          this.treeData = data.map((item) => {
            if (item.source !== 0) {
              return {
                ...item,
                scopedSlots: { title: 'name' }
              }
            }
            return {
              ...item,
              scopedSlots: { icon: 'folderIcon', title: 'name' },
              children: []
            }
          })
        } else if (nodeData.source === 0) {
          // 点击文件夹
          this.recursionData(this.treeData, nodeData, data)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.m-sheet-trees {
  width: 100%;
  overflow-y: auto;
  height: 100%;
  // overflow-x: hidden;
  /deep/ .ant-tree {
    padding-left: 10px;
    /* 目录树样式校正 */
    /* 删调折叠图标 */
    /deep/ .ant-tree-switcher {
      display: none;
    }
    /* 校正图标与字体位置 */
    /deep/ .ant-tree-node-content-wrapper {
      display: inline-flex;
      align-items: center;
    }
    /* 文字与图标的位置 */
    /deep/ .ant-tree-title {
      width: 85%;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 96%;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    /deep/ .anticon-folder,
    /deep/.anticon-folder-open {
      font-size: 16px;
    }
  }
  /deep/ .ant-tree li .ant-tree-node-content-wrapper {
    width: 100%;
    // padding: 0;
    display: inline-flex;
    align-items: center;
    .m-item-name {
      margin-left: 4px;
    }

    /* 三个点显示隐藏 */
    .ant-tree-title .ant-dropdown-trigger {
      visibility: hidden;
    }
    .ant-tree-title:hover .ant-dropdown-trigger {
      visibility: visible;
    }
  }
  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
    margin-right: 5px;
  }
}
</style>
