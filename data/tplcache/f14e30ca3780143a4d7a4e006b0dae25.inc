<li>[field:array runphp='yes']@me = (empty(@me['litpic']) ? "" : "<a href='{@me['arcurl']}' class='preview'><img src='{@me['litpic']}' class='left'/></a>"); [/field:array]
                        <div class="right">
                            <em><a href="[field:arcurl/]" class="title">[field:title/]</a><span>[field:pubdate function="GetDateMK(@me)"/]</span></em>
                            <p>
                                [field:description/]...</p>
                            <a href="[field:arcurl/]" target="_blank">
                                <img src="[field:global.cfg_templets_skin/]/images/btnImg.jpg" /></a>
                        </div>
                    </li>