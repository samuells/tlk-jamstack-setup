/* eslint-disable require-await */
export const getters = {
  cacheVersion: (store) => store.cacheVersion
}

export const mutations = {
  async setCacheVersion(state, cacheVersion) {
    state.cacheVersion = cacheVersion
  }
}

export const actions = {
  async loadCacheVersion({ commit }, context) {
    if (context.store.state.storyblok.cacheVersion === 0) {
      // initial cache version call to improve further requests
      // since they now only hit the CDN.
      const { data } = await context.app.$storyapi.get(`cdn/spaces/me`)
      commit('setCacheVersion', data.space.version)
    }
  }
}
