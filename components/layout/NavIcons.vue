<template>
  <div class="icons">
    <button class="cart" type="button">
      <span class="ir_su">카트</span>
    </button>
    <button class="search" type="button">
      <span class="ir_su">찾기</span>
    </button>
    <button
      class="profile icons_clickable"
      type="button"
      @mouseenter="onMouseToggleProfile()"
      @mouseleave="onMouseToggleProfile()"
    >
      <span class="ir_su">프로필</span>
      <div class="profile" :class="profileToggle ? 'on' : ''">
        <h5>이름</h5>
        <ul>
          <li>1</li>
          <li>2</li>
          <li @click="$router.push('/mypage')">3</li>
          <li>4</li>
        </ul>
      </div>
    </button>
    <button class="hamburger" type="button" @click="this.onToggleNav">4</button>
  </div>
</template>