import axios from "axios"

export const getImg = (name) => {
  return require(`../assets/icon/sidebar/${name}.png`)
}

export const getImgRel = (path) => {
  return require(`../assets/icon/${path}.png`)
}
