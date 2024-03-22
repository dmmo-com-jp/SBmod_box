var jsonData = [
    {
        name: "v6=>v7変換機",
        url: "970522194",
        tag: ["sevecode","ver7"],
        description: "ver6のセーブコードをver7のセーブコードに変換します"
    },
    {
        name: "v5=>v7変換機",
        url: "971282916",
        tag: ["sevecode","ver7"],
        description: "ver5のセーブコードをver7のセーブコードに変換します"
    },
    
    // 他のmodのデータを追加
];

function custom_tag(tagName,modtag){
    switch (tagName) {
        case 'sevecode':
            modtag += `<p class="modtag blue">セーブコード変換</p>`;
            break;
        case 'creative':
            modtag += `<p class="modtag purple">クリエイティブ</p>`;
            break;
        case 'debug':
            modtag += `<p class="modtag purple">デバッグ</p>`;
            break;
        default:
            break;
    }
    return modtag
}