var jsonData = [
    {
        name: "SBAPI",
        file: "SBAPI.zip",
        url: "933515639",
        tag: ["premise"],
        description: "ビル経の拡張性を高め、様々なmodを作りやすくするツール"
    },
    {
        name: "sorting Mod",
        file: "sorting_mod_v0.02.zip",
        url: "945217558",
        tag: ["SBAPI"],
        description: "建築リストに儲け順等の並べ替えを追加します。"
    },
    {
        name: "SBMOD",
        file: "SB_MOD_1.0.zip",
        url: "940232456",
        tag: ["premise"],
        description: ""
    },
    {
        name: "cmdplus",
        file: "cmdplus.zip",
        url: "939787547",
        tag: ["SBAPI"],
        description: "SBAPIベースでコマンドを強化します。"
    },
    {
        name: "GUIサンプル",
        file: "guiサンプル.zip",
        url: "945187053",
        tag: ["SBMOD","premise"],
        description: "SBMODのサンプルmod"
    },
    {
        name: "非公式アドオン",
        file: "SBMOD非公式アドオン.zip",
        url: "949284994",
        tag: ["SBMOD"],
        description: "SBMODのguiサンプルを改造したmod"
    }
    // 他のmodのデータを追加
];
  
function processJSON(data) {
    var modListDiv = document.querySelector(".modlist");
    modListDiv.innerHTML = ""; // 現在のmodリストをクリア

    // modを名前の辞書順でソート
    data.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    for (var i = 0; i < data.length; i++) {
        const mod = data[i];
        //tagを作る
        let modtag = ``
        mod.tag.forEach(tagName => {
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
        });
        console.log(modtag)
        //modの説明
        if (!mod.description) mod.description = `This is the ${mod.name}.`

        //アイテム作成
        var modDiv = document.createElement("div");
        modDiv.className = "mod-item";
        modDiv.innerHTML=(`
            <h2>${mod.name}</h2>
            <p class="tags">${modtag}</p>
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
function filterMods(modType) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedTypes = Array.from(checkboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    if (checkedTypes.includes("all")) {
        processJSON(jsonData);
    } else {
        var filteredMods = jsonData.filter(function (mod) {
        console.log(`tag:${mod.tag} ct:${checkedTypes}`)
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