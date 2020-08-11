export const state = () => ({
  showcase: [
    {layer: 1, src: '/imgs/e33a/2.png', alt: 'layer 1/ img 2'},
    {layer: 2, src: '/imgs/e33a/3.png', alt: 'layer 2/ img 3'},
    {layer: 3, src: '/imgs/e33a/4.png', alt: 'layer 3/ img 4'},
    {layer: 4, src: '/imgs/e33a/5.png', alt: 'layer 3/ img 4'},
    {layer: 5, src: '/imgs/e33a/6.png', alt: 'layer 3/ img 4'},
    {layer: 6, src: '/imgs/e33a/7.png', alt: 'layer 3/ img 4'},
    {layer: 7, src: '/imgs/e33a/8.png',},
    {layer: 8, src: '/imgs/e33a/9.png',},
  ],
  customShowcase: [
    {layer: 1, src: '/imgs/e33a/2.png', alt: 'layer 1/ img 2'},
    {layer: 2, src: '/imgs/e33a/3.png', alt: 'layer 2/ img 3'},
    {layer: 3, src: '/imgs/e33a/4.png', alt: 'layer 3/ img 4'},
    {layer: 4, src: '/imgs/e33a/5.png', alt: 'layer 3/ img 4'},
    {layer: 5, src: '/imgs/e33a/6.png', alt: 'layer 3/ img 4'},
    {layer: 6, src: '/imgs/e33a/7.png', alt: 'layer 3/ img 4'},
    {layer: 7, src: '/imgs/e33a/8.png',},
    {layer: 8, src: '/imgs/e33a/9.png',},
  ],
  details: [
    {layer: 2, src: '/imgs/e33a/3_1.png', alt: 'replaced lyaer 2'},
    {layer: 3, src: '/imgs/e33a/4_1.png', alt: 'replaced lyaer 2'},
    {layer: 4, src: '/imgs/e33a/5_1.png', alt: 'replaced lyaer 2'},
    {layer: 6, src: '/imgs/e33a/7_1.png', alt: 'replaced lyaer 2'},
  ],
  savedResults:[],
})

export const mutations = {
  setCustomShowcase: (state:any, data:object) => state.customShowcase = data,
  resetCustomShowcase: (state:any) => state.customShowcase = JSON.parse(JSON.stringify(state.showcase)),
  saveResult: (state:any) => state.savedResults.push(JSON.parse(JSON.stringify(state.customShowcase))),
  setCustomShowcaseElement: (state:any, data:any) => {
    state.customShowcase.splice(data.index, 1, data.details);
  },
}

export const getters = {
  showcase: (state:any) => state.showcase,
  customShowcase: (state:any) => state.customShowcase,
  details: (state:any) => state.details,
  savedResults: (state:any) => state.savedResults,
}

export const actions = {
  setPicture({commit}:any, layer:string) {
    // @ts-ignore
    let index = this.getters.customShowcase.findIndex((el: any)=>el.layer === layer);
      // @ts-ignore
    let details = this.getters.details.find((el: any)=>el.layer === layer);
    commit('setCustomShowcaseElement', {index, details});
  },
  saveResult({commit}:any, data:object){

  }
}
