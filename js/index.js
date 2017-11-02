$(document).ready(function() { 
	data = JSON.parse(data)
	g = new jsgraphs.WeightedGraph(data.nodes.length);
	
	for(let i=0;i<data.edges.length;i++){
		let edge = data.edges[i];
		//g.addEdge(edge.actor1, edge.actor2);
		e = new jsgraphs.Edge(edge.actor1, edge.actor2, 10-edge.movie_rating);
		g.addEdge(e);
	}
	
	$('body').html("finished loading the file!")
	
	prims(g);
});



function kruskals(g){
	var kruskal = new jsgraphs.KruskalMST(g); 
	var mst = kruskal.mst;
	for(var i=0; i < mst.length; ++i) {
		var e = mst[i];
		var v = e.either();
		var w = e.other(v);
		console.log('(' + v + ', ' + w + '): ' + e.weight);
	}
}


function prims(g){
	var prim = new jsgraphs.EagerPrimMST(g); 
	var mst = prim.mst;
	for(var i=0; i < mst.length; ++i) {
		var e = mst[i];
		var v = e.either();
		var w = e.other(v);
		console.log('(' + v + ', ' + w + '): ' + e.weight);
	}
}