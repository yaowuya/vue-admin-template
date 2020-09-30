<template>
  <div class="app-container">
    <avue-crud
      :data="data"
      :option="option"
      :page.sync="page"
      @size-change="sizeChange"
      @current-change="currentChange"
      @search-change="searchChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        pageSizes: [10, 20, 30, 40], // 默认
        currentPage: 1,
        total: 0,
        pageSize: 10
      },
      data: [
        {
          name: '张三',
          sex: '男'
        },
        {
          name: '李四',
          sex: '女'
        }
      ],
      option: {
        emptyText: '暂无数据',
        columnBtn: false,
        refreshBtn: false,
        addBtn: false,
        dialogDrag: true,
        border: true,
        stripe: true,
        selection: false,
        align: 'center',
        menuAlign: 'center',
        column: [
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '性别',
            prop: 'sex'
          }
        ]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.page.total = 200
      if (this.page.currentPage === 1) {
        this.data = [
          {
            name: '张三',
            sex: '男'
          }
        ]
      } else if (this.page.currentPage === 2) {
        this.data = [
          {
            name: '李四',
            sex: '女'
          }
        ]
      }
    },
    sizeChange(val) {
      this.page.currentPage = 1
      this.page.pageSize = val
      this.getList()
      this.$message.success('行数' + val)
    },
    currentChange(val) {
      this.page.currentPage = val
      this.getList()
      this.$message.success('页码' + val)
    },
    searchChange(params, done) {
      done()
      this.$message.success(JSON.stringify(params))
    }
  }
}
</script>
