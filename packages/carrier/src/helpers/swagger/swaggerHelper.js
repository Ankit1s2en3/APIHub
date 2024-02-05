const getPathsModals = (specsJson) => {
    let paths = Object.keys(specsJson.paths)
    let modals = Object.keys(specsJson.definitions)
    console.log(modals)
    return[paths,modals]
}

export {getPathsModals}