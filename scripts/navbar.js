document.getElementById('navbar').innerHTML=(`
    <nav class="flex flex-row justify-between items-center gap-2 py-3 px-3">
        <img src="images/favicon.svg" height="30" width="40" class="my-auto">
        <ul class="flex flex-row items-center gap-2">
            <li><a id="nav" href="index.html" class="rounded-md p-2">ホーム</a></li>
            <li><a id="nav" href="modlist.html" class="rounded-md p-2">modを見る</a></li>
            <li><a id="nav" href="toolslist.html" class="rounded-md p-2">ツールを見る</a></li>
            <li><a id="nav" href="services.html" class="rounded-md p-2">SBAPIの使い方</a></li>
            <li><a id="nav" href="contact.html" class="rounded-md p-2">SBMODの使い方</a></li>
        </ul>
    </nav>
`)