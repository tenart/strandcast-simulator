import Simulator from "./simulator.js";
import Render from "./render.js"

function start() {
    const strandCast = new Simulator();
    const view = new Render($("#root"), strandCast);

    strandCast.addPeer({type: "peer", id: "Peer_A"});
    strandCast.addPeer({type: "peer", id: "Peer_B"});
    // strandCast.addPeer({type: "peer", id: "Peer_C"});
    // strandCast.addPeer({type: "peer", id: "Peer_D"});
    // strandCast.addPeer({type: "peer", id: "Peer_E"});
    // strandCast.addPeer({type: "peer", id: "Peer_F"});
    strandCast.startStrand();
    
    view.initView();

    // console.log(strandCast.getSource().print()); 
    // strandCast.getPeers().forEach((peer) => {
    //     console.log(peer.print());
    // })
    // console.log(strandCast.getSink().print()); 

    // strandCast.getLinks().forEach((link) => {
    //     console.log(link.print());
    // })
};

$(function() {
    start();  

    
});