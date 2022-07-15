
function Hide() {
    return {
        type: 'Hide' // 啟動這 case 顯示
    }
}

function Show() {
    return {
        type: 'Show' // 離開啟動這return 取消顯示
    }
}

export {Hide, Show}