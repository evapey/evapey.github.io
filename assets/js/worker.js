	// curious as to how this works, yes?
	// var discord_id = "YOUR_ID";
	// Credits: Azariel#0004 & Roka#1337
	// also replace #spotify with Class ID
	// Documentation: https://github.com/phineas/lanyard

	var discord_id = "320243888503652353";

    function updateStats() {
                    $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
                        data = data.data;
                        if (data.listening_to_spotify) {
                            $("#spotify").html(`<font size="4"><div style="font-family: 'Poiret One', regular;">‎ ‎ Currently listening to <a style="text-decoration:none" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}"><b>${data.spotify.song}</b> \n by <i>${data.spotify.artist}</i></font></a></div>`);
                        } else {
                            $("#spotify").html(`<font size="4">‎<div style="font-family: 'Poiret One', regular;">‎ ‎ Not listening to anything.</font></div>`)
                        }
            })
    }
    updateStats();
    setInterval(updateStats, 5000);