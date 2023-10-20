// Variable "clinetId" con el token creado en la parte de developers Twitch
let clinetId = "lxihbl5ugsykcpcxg8jojpwm0xjy9c";
// Variable "clinetSecret" con el token creado en la parte de developers Twitch
let clinetSecret = "ay6wk9egut7c7hx25v391xmpefszu7";



function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

    return fetch(url, {
        method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

async function getGameId(gameName, accessToken) {
    const url = `https://api.twitch.tv/helix/games?name=${gameName}`;
    const headers = {
        "Client-Id": clinetId,
        "Authorization": `Bearer ${accessToken}`
    };

    const response = await fetch(url, {
        headers,
    });

    const data = await response.json();
    
    if (data.data.length > 0) {
        // Si se encontró el juego, devuelve el ID del primer resultado
        return data.data[0].id;
    } else {
        // El juego no se encontró
        return null;
    }
}

async function getStreams(gameId, accessToken) {
    const endpoint = `https://api.twitch.tv/helix/streams?game_id=${gameId}`;
    const headers = {
        "Client-Id": clinetId,
        "Authorization": `Bearer ${accessToken}`
    };

    const response = await fetch(endpoint, {
        headers,
    });

    return response.json();
}

function renderStreams(data) {
    let { data: streams } = data;
    let streamsContainer = document.querySelector("div.streams");

    streamsContainer.innerHTML = ''; // Limpia el contenedor antes de agregar los nuevos streams
    var contador = 0
    streams.forEach((stream) => {
        if (contador < 3) {
            let { thumbnail_url: thumbnail, title, viewer_count, user_name } = stream;
            let hdThumbnail = thumbnail
                .replace("{width}", "1280")
                .replace("{height}", "720");

            // Crea un hipervínculo para redirigir al canal del streamer
            const streamLink = document.createElement('a');
            streamLink.href = `https://www.twitch.tv/${user_name}`;
            streamLink.target = '_blank'; // Abre el enlace en una nueva pestaña

            // Crea el contenedor del stream
            const streamContainer = document.createElement('div');
            streamContainer.classList.add('stream-container');

            // Crea la imagen del stream
            const streamImage = document.createElement('img');
            streamImage.src = hdThumbnail;

            // Crea el título del stream
            const streamTitle = document.createElement('h2');
            streamTitle.textContent = title;

            // Crea la descripción del número de espectadores
            const viewerCount = document.createElement('p');
            viewerCount.textContent = `${viewer_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} watching`;

            // Agrega elementos al contenedor del stream
            streamContainer.appendChild(streamImage);
            streamContainer.appendChild(streamTitle);
            streamContainer.appendChild(viewerCount);

            // Agrega el contenedor del stream al hipervínculo
            streamLink.appendChild(streamContainer);

            // Agrega el hipervínculo al contenedor principal de streams
            streamsContainer.appendChild(streamLink);

            contador += 1;
        }
    });
}

async function getTwitchData() {
    const authData = await getTwitchAuthorization();
    const gameId = await getGameId('Left 4 Dead 2', authData.access_token);
    const streamsData = await getStreams(gameId, authData.access_token);

    renderStreams(streamsData);
}

getTwitchData();