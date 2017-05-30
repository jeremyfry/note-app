export default {
	user: {
		authenticated: false,
		username: '',
		role: null
	},
	notes: [{
		id: "note_1",
		title: "Something Happened",
		text: "This is a rather small note to read",
		date: "2017-02-05 11:25:00",
		createdBy: "Manager 1",
		editing: false,
		geo: {
			lat: 42.1845,
			lon: -83.589
		}
	}, {
		id: "note_2",
		title: "Something Happened 2",
		text: "This is a rather small note to read 2",
		date: "2017-02-05 14:25:00",
		createdBy: "Manager 1 2",
		editing: false,
		geo: {
			lat: 42.1859,
			lon: -83.5884
		}
	}],
	geo: {
		useCurrentLocation: false,
		lat: 0,
		lon: 0
	}
};
