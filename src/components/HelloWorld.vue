<template>
  <div class="container">
    <div class="header">
      <h1 class="title">MIPS Studio</h1>
      <h2 class="subtitle">一站式 MIPS 集成开发环境</h2>
    </div>
    <div class="main">
      <div class="startup">
        <a class="main-subtitle">启动向导</a>
        <button class="button">
          <img class="button-icon" alt="Vue logo" src="../assets/AddToCollection_16x.svg">
          <a>新建项目</a>
        </button>
        <button class="button">
          <img class="button-icon" alt="Vue logo" src="../assets/OpenFileFromProject_16x.svg">
          <a>打开项目</a>
        </button>
        <button class="button">
          <img class="button-icon" alt="Vue logo" src="../assets/CloudSearch_16x.svg">
          <a>查询用户文档</a>
        </button>
      </div>
      <div class="history">
        <a class="main-subtitle">最近项目</a>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <a class="footer-text">© 2023 上海芯联芯智能科技有限公司</a>
    </div>
  </div>
</template>

<script>
let id = 0;
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      // ...
      this.newTodo = ''
    },
    // removeTodo(todo) {
    //   // ...
    // }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

.container {
  display: flex;
  flex-flow: column;
  margin: 32px;
  row-gap: 32px;
}
.title {
  font-size: 48px;
  color: #705697;
  margin: 0;
  line-height: 40px;
}

.subtitle {
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
}

.main-subtitle {
  margin-bottom: 16px;
  line-height: 23px;
}

.main {
  display: flex;
  column-gap: 105px;
  column-count: 2;
}

.startup {
  display: flex;
  flex-flow: column;
  column-gap: 14px;
}

.startup .button {
  /* position: absolute; */
  width: 276px;
  height: 48px;
  background: #EDE8EF;
  border: none;
  margin: 0;
  text-align: justify;
  margin-bottom: 14px;
  font-size: 24px;
  align-items: center;
  display: flex;
  column-gap: 15px;
}

.history {
  display: flex;
  flex-flow: column;
  min-width: 310px;
}

.history>ul {
  margin: 0;
  display: flex;
  flex-flow: column;
  margin-left: 20px;
}

li {
  padding-left: 12px;
  list-style: "⯈";
  font-size: 14px;
  line-height: 20px;
}


.button-icon {
  width: 28px;
  margin-left: 9px;
}

.footer {
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  margin-top: 30px;
}

.footer-text {
  float: right;
}

</style>
