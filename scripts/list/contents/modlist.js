var jsonData = [
    {
        name: "SBAPI",
        file: "SBAPI.zip",
        url: "933515639",
        tag: ["premise","ver7"],
        description: "ビル経の拡張性を高め、様々なmodを作りやすくするツール"
    },
    {
        name: "sorting Mod",
        file: "sorting_mod_v0.02.zip",
        url: "945217558",
        tag: ["SBAPI","ver7"],
        description: "建築リストに儲け順等の並べ替えを追加します。"
    },
    {
        name: "SBMOD",
        file: "SB_MOD_1.0.zip",
        url: "940232456",
        tag: ["premise","ver7"],
        description: ""
    },
    {
        name: "cmdplus",
        file: "cmdplus.zip",
        url: "939787547",
        tag: ["SBAPI","ver7"],
        description: "SBAPIベースでコマンドを強化します。"
    },
    {
        name: "GUIサンプル",
        file: "guiサンプル.zip",
        url: "945187053",
        tag: ["SBMOD","premise","ver7"],
        description: "SBMODのサンプルmod"
    },
    {
        name: "非公式アドオン",
        file: "SBMOD非公式アドオン.zip",
        url: "949284994",
        tag: ["SBMOD","ver7"],
        description: "SBMODのguiサンプルを改造したmod"
    }
    // 他のmodのデータを追加
];

function custom_tag(tagName,modtag){
    switch (tagName) {
        case 'premise':
            modtag += `<p class="modtag blue">前提</p>`;
            break;
        case 'SBAPI':
            modtag += `<p class="modtag purple">SBAPI</p>`;
            break;
        case 'SBMOD':
            modtag += `<p class="modtag purple">SBMod</p>`;
            break;
        default:
            break;
    }
    return modtag
}