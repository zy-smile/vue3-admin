// 拍平树结构
export const flatTree = function (tree) {
  let result = []
  tree.forEach(item => {
    let obj = {
      ...item
    }
    delete obj.children
    result.push(obj)
    if (item.children && item.children.length > 0) {
      result = result.concat(flatTree(item.children))
    }
  })
  return result;
}
// 转化为树结构
export const buildTree = function (data, pid) {
  if (!data || data.length == 0) return;
  let result = data.filter(item => item.pid === pid)
  if (!result.length) return false;
  result.map(item => {
    let children = buildTree(data, item.id)
    if (children.length) {
      item.children = children
    }
  })
  return result
}