<template>
  <div>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title1 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod1" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title2 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod2" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title3 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod3" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title4 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod4" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title5 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod5" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title6 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod6" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title7 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod7" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title8 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod8" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title9 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod9" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title10 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod10" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title11 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod11" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title12 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod12" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title13 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod13" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title14 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod14" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title15 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod15" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title16 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod16" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
    <Card>
      <h2 class="fontColor">{{ arrayOperation.Title17 }}</h2>
      <div class="paddingin">
        <p v-for="item in arrayOperation.ArrayMethod17" :key="item.index">{{ item.Count }}</p>
      </div>
    </Card>
  </div>
</template>

<script>
import arrayOperation from './arrayOperation.json'
export default {
  data() {
    return {
      arrayOperation: arrayOperation,
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