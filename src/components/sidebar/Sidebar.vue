<script>
import SidebarLink from './SidebarLink.vue'
import { toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      
      <span>OUM-SAN</span>
    </h1>
    

    <SidebarLink to="/" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/ventes" icon="fas fa-coins">Ventes</SidebarLink>
    <SidebarLink to="/clients" icon="fas fa-user-tie">Clients</SidebarLink>
    <SidebarLink to="/production" icon="fas fa-cog">Production</SidebarLink>
    <SidebarLink to="/stock" icon="fas fa-box">Stock</SidebarLink>

    
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #006D77;
  --sidebar-item-hover: #e5e5e565;
  --sidebar-item-active: #e5e5e565;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 10px 2px #0000003d;
}
.sidebar h1 {
  height: 2.5em;
  padding-top: 20px;
  padding-bottom: 80px;
  font-size: 22px;
  letter-spacing: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-shadow: 1px 4px 4px #0000003d;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>