import { createRouter, createWebHistory } from 'vue-router';

const Routers = [
  {
    'name': 'Home',
  },
  {
    'name': 'WOW',
  },
  {
    'name': 'Pokémon',
  },
]
let routerList: any = [];

const modules = import.meta.glob('../views/**/*.vue');
Object.keys(modules).forEach(key => {
  const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
  if(!nameMatch) return
  const indexMatch = nameMatch[1].match(/(.*)\/Index$/i)
  const name = indexMatch ? indexMatch[1] : nameMatch[1];

  routerList.push({
    path: `/${ name.toLowerCase() === 'home' ? '' :  name.toLowerCase()}`,
    name: `${ name.toUpperCase() }`,
    component: modules[key]
  })
})

export default createRouter({
  history: createWebHistory(),
  routes: routerList,
});