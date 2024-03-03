var jsonData = [
    {
      name: "SBAPI",
      file: "SBAPI.zip",
      url: "933515639",
      mod_type: "premise",
      description: "ビル経の拡張性を高め、様々なmodを作りやすくするツール"
    },
    {
      name: "sorting Mod",
      file: "sorting.zip",
      url: "945217558",
      mod_type: "SBAPI",
      description: "建築リストに儲け順等の並べ替えを追加します。"
    },
    {
      name: "SBMOD",
      file: "SBMOD.zip",
      url: "940232456",
      mod_type: "premise",
      description: ""
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
      var mod = data[i];
  
      var modDiv = document.createElement("div");
      modDiv.className = "mod-item";
      if (mod.mod_type === "premise") {
        modDiv.classList.add("premise-mod");
      } else if (mod.mod_type === "SBAPI") {
        modDiv.classList.add("SBAPI-mod");
      } else if (mod.mod_type === "SBMOD") {
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
    }
  }
  
  function filterMods(modType) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedTypes = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    if (checkedTypes.includes("all")) {
      processJSON(jsonData);
    } else {
      var filteredMods = jsonData.filter(function (mod) {
        return checkedTypes.includes(mod.mod_type);
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
