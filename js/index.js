$(document).ready(function() { 
	// data fetched from https://www.kaggle.com/tmdb/tmdb-movie-metadata on 11/1/2017
	data = JSON.parse(data)
	g = new jsgraphs.WeightedGraph(data.nodes.length);
	
	for(let i=0;i<data.edges.length;i++){
		let edge = data.edges[i];
		//g.addEdge(edge.actor1, edge.actor2);
		e = new jsgraphs.Edge(edge.actor1, edge.actor2, 10-edge.movie_rating);
		e.movie_title = edge.movie_title;
		g.addEdge(e);
	}
	
	$('body').html("finished loading the file!")
	
	
	// change this line if you want to use kruskal's instead!
	prims(g);
});



function kruskals(g){
	var kruskal = new jsgraphs.KruskalMST(g); 
	var mst = kruskal.mst;
	printMST(mst);
}


function prims(g){
	var prim = new jsgraphs.EagerPrimMST(g); 
	var mst = prim.mst;
	printMST(mst);
}

function printMST(mst){
	for(var i=0; i < mst.length; ++i) {
		var e = mst[i];
		var v = e.either();
		var actor_v = data.nodes[v].name
		var w = e.other(v);
		var actor_w = data.nodes[w].name
		//console.log(e)
		console.log('' + actor_v + ' & ' + actor_w + ': "' + e.movie_title +'" (rating: '+(-1*e.weight+10) + ")");
	}
}