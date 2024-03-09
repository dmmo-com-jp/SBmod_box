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
  
        //modの説明
        if (!mod.description) mod.description = `This is the ${mod.name}.`

        //アイテム作成
        var modDiv = document.createElement("div");
        modDiv.className = "mod-item";
        modDiv.innerHTML=(`
            <div class="info">
                <h2>${mod.name}</h2>
                <div class="tags">${modtag}</div>
            </div>
            <p class="description">${mod.description}</p>
            <p><a href="mods/${mod.file}" download="true">ダウンロード</a></p>
            <p><a href="https://scratch.mit.edu/projects/${mod.url}">プロジェクトのリンク</a></p>
            <img src="https://uploads.scratch.mit.edu/projects/thumbnails/${mod.url}.png">
        `)

        modListDiv.appendChild(modDiv);
        /*
        if (mod.tag === "premise") {
        modDiv.classList.add("premise-mod");
        } else if (mod.tag === "SBAPI") {
        modDiv.classList.add("SBAPI-mod");
        } else if (mod.tag === "SBMOD") {
        modDiv.classList.add("SBMOD-mod");
        }

        var modName = document.createElement("h2");
        modName.textContent = mod.name;
        modDiv.appendChild(modName);
        //descriptionを組み立てる
    if (!mod.description) mod.description = `This is the ${mod.name}.`
        var modDescription = document.createElement("p");
        modDescription.textContent = mod.description;
        modDescription.className = "description"
        modDiv.appendChild(modDescription);

        var modFileP = document.createElement("p");
        modDiv.appendChild(modFileP);

        var modFileLink = document.createElement("a");
        modFileLink.href = "mods/" + mod.file;
        modFileLink.download = true;
        modFileLink.textContent = "ダウンロード";
        modFileP.appendChild(modFileLink);

        var projectLinkP = document.createElement("p");
        modDiv.appendChild(projectLinkP);

        var projectLink = document.createElement("a");
        projectLink.href = "https://scratch.mit.edu/projects/" + mod.url;
        projectLink.textContent = "プロジェクトのリンク";
        projectLinkP.appendChild(projectLink);

        var image = document.createElement("img");
        image.src =
        "https://uploads.scratch.mit.edu/projects/thumbnails/" +
        mod.url +
        ".png";
        modDiv.appendChild(image);

        modListDiv.appendChild(modDiv);
        */
    }
}

// 複数の特定要素のうちひとつでも当てはまったら true を返す
const isIncludes = (arr, target) => arr.some(el => target.includes(el));
//配列に特定の要素以外が含まれてる場合にtrue
function containsOnly(arr, targetElement) {
    return arr.some(element => element !== targetElement);
}
let select_version = document.querySelector(`select[name='version']`)
var beforeall = true
document.querySelector(`input[type='checkbox'][value='all']`).checked = true
function filterMods(modType) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedTypes = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
        const sel_version = select_version.value
        //if(!modType){
        if(containsOnly(checkedTypes,"all") && beforeall!=false){ 
            document.querySelector(`input[type='checkbox'][value='all']`).checked = false
            checkedTypes = checkedTypes.filter(element => element !== "all")
        }else {
            if(checkedTypes.length != 0){
            if(checkedTypes.includes("all")){
        checkedTypes.forEach(cb =>{
            document.querySelector(`input[type='checkbox'][value=${cb}]`).checked = false
        })
        document.querySelector(`input[type='checkbox'][value='all']`).checked = true
        checkedTypes = ["all"]
        }
        }else{
        document.querySelector(`input[type='checkbox'][value='all']`).checked = true
        checkedTypes = ["all"]
        }}
    if (checkedTypes.includes("all")) {
        beforeall = true
        processJSON(jsonData.filter((mod)=>mod.tag.includes(sel_version)||sel_version==="all"));
    } else {
        beforeall = false
        var filteredMods = jsonData.filter(function (mod) {
        //console.log(`tag:${mod.tag} ct:${checkedTypes}`)
        if(!mod.tag.includes(sel_version)&&sel_version!=="all") return false
        let truefalse = false
        mod.tag.forEach((elm)=>{
            if(isIncludes(checkedTypes,elm)) truefalse=true
        })
        return truefalse
        });
        processJSON(filteredMods);
    }
}

function searchMods() {
    var searchInput = document.getElementById("search-input");
    var searchTerm = searchInput.value.toLowerCase();

    var filteredMods = jsonData.filter(function (mod) {
        return mod.name.toLowerCase().includes(searchTerm);
    });

    processJSON(filteredMods);
}

processJSON(jsonData);

select_version.onchange = event => { 
            filterMods("ver")
        }
