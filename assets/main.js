const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDPke3A2XuBLg&part=snippet&maxResults=5';

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bd5a2c542dmsh8414937ccb68d65p1f864ejsnc40e93dba0c1',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try{
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <a href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}">${video.snippet.title}</a>
                        </h3>
                        
                    </div>
                </div>
            `).slice(0,4).join("")}
        `
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})()

