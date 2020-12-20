/*
*	@filename	countess.js
*	@author		isid0re
*	@desc		countess runs for rune based gear.
*/

function countess () {
	if (me.diff === 0 && haveItem("shield", "runeword", "Ancients' Pledge") && haveItem("armor", "runeword", "Stealth") || me.diff === 2 && me.charlvl < respecTwo || me.diff === 2 && me.classid === 1) {
		return true;
	}

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting countess');
	me.overhead("countess");

	if (!Pather.checkWP(6)) {
		Pather.getWP(6);
	} else {
		Pather.useWaypoint(6);
	}

	Precast.doPrecast(true);

	try {
		Pather.moveToExit([20, 21, 22, 23, 24, 25], true);
		Pather.moveToPreset(me.area, 2, 580);
		Attack.clear(20, 0, getLocaleString(2875));
	} catch (err) {
		print('ÿc9SoloLevelingÿc0: Failed to kill Countess');
	}

	Pickit.pickItems();

	return true;
}