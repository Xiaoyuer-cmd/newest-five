<template>
  <div>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title1 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod1" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title2 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod2" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title3 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod3" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title4 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod4" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title5 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod5" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title6 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod6" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title7 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod7" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title8 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod8" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title9 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod9" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayTraversal.Title10 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayTraversal.ArrayMethod10" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
  </div>
</template>

<script>
import arrayTraversal from './arrayTraversal.json'
export default {
  data() {
    return {
      arrayTraversal: arrayTraversal,
    }
  },
}
</script>

<style scoped>
.fontColor {
  color: #0071c5;
  box-sizing: border-box;
  padding: 8px 0;
}
.paddingin {
  padding: 8px 28px;
}
.paddingin p {
  padding: 8px 0px;
  font-size: 16px;
  color: green;
}
</style>