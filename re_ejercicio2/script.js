function votesCounting(votes){
	let counting = Array().fill(0);
	for(indx in votes){
		if(counting[votes[indx]]){
			counting[votes[indx]]++
		}else
			counting[votes[indx]] = 1;
	}
	let maxVotes = 0;
	let winnerID = 0;
	for(id in counting){
		if(counting[id]> maxVotes){
			maxVotes = counting[id];
			winnerID = id;
		}
	}
	return {id: winnerID, votes:maxVotes};
}
