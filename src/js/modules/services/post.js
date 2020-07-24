export const postData = async (data, url) => {
	const res = await fetch(url, {
					method: 'POST',
					body: data,
				})
	
	return await res.text();
}

export const getData = async (url) => {
	const res = await fetch(url)

	if (!res.ok) {
		throw Error(`Error log: ${res}, status: ${res.status}`);
	}

	return await res.json();
}