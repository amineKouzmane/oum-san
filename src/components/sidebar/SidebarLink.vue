<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive}
  }
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  font-size: 18px;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  user-select: none;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  padding: 0.7em;
  border-radius: 10px;
  height: 1.5em;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 15px;
  padding-left: 13px;
}
</style>