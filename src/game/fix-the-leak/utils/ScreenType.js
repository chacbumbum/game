import { Log } from 'utils/Log';

export function getInitData(game) {
	const width = game.width;
	const height = game.height;
	let data = {
		mapScreen: 6,
		pannel_margin_left: 75,
		intro_font: 50,
		des_font: 40,
		ok_width: 120,
		button_dis: 100,
		animatorWidth: 280,
		animatorScale: .9,
		animatorIntroScale: [-1, 1],
		cLine: 30,
		map: 'map',
		gid: 2561,
		pipes: 'pipe',
		water: 'waters',
		scale_maps: width / 768,
		score_margin_top: 200,
		inputWidth: 350,
		inputHeight: 50,
		font_score: 40,
		font_score_end_game: 60,
		tabs: 120,
		submit_width: 205,
		submitButtonScale: 1,
		buttonScale: 1,
		endgamePadding: 20,
		level_font: 40,
		level_font_number: 46,
		level_font_tabs: 140,
		levelMargin: 10,
		scoreMargin: 70,
		textNameMargin: 120,
		panelWidth: 660,
		panelHeight: 780,
		pivot: {},
		fontScoreEndGame: 70
	};
	Log.info(width, height);

	/**
	 * 414 x 736
	 */
	if (width <= 375) {
		data = Object.assign({}, data, {
			mapScreen: 0,
			pannel_margin_left: 30,
			intro_font: 22,
			des_font: 18,
			ok_width: 90,
			button_dis: 60,
			animatorWidth: 160,
			animatorScale: .5,
			smallScreen: true,
			cLine: 15,
			map: 'map-mobile',
			gid: 641,
			pipes: 'pipe_mobile',
			water: 'water-mobile',
			scale_maps: width / 320,
			score_margin_top: 30,
			inputWidth: 160,
			inputHeight: 25,
			font_score: 20,
			font_score_end_game: 20,
			tabs: 60,
			textNameMargin: 50,
			submitButtonScale: .4,
			buttonScale: .6,
			endgamePadding: 10,
			level_font: 27,
			level_font_number: 40,
			level_font_tabs: 100,
			panelWidth: 340,
			panelHeight: 460,
			fontScoreEndGame: 40

		});
	} else if (width > 375 && width <= 480 && height <= 736) {
		data = Object.assign({}, data, {
			mapScreen: 1,
			pannel_margin_left: 30,
			intro_font: 22,
			des_font: 18,
			ok_width: 100,
			button_dis: 80,
			animatorWidth: 210,
			animatorScale: .7,
			smallScreen: true,
			cLine: 15,
			map: 'map-small',
			gid: 1293,
			pipes: 'pipe_small',
			water: 'water-small',
			scale_maps: width / 408,
			score_margin_top: 30,
			inputWidth: 250,
			inputHeight: 40,
			font_score: 20,
			font_score_end_game: 30,
			tabs: 70,
			submitButtonScale: .6,
			buttonScale: .6,
			endgamePadding: 10,
			level_font: 27,
			level_font_number: 40,
			level_font_tabs: 100,
			panelWidth: 380,
			panelHeight: 445,
			textNameMargin: 60,
			fontScoreEndGame: 50
		});
	} else if (width <= 768 & width > 480 && height <= 1024) {
		/**
		 * 768 x 1024 
		*/
		data = Object.assign({}, data, {
			mapScreen: 2,
			pannel_margin_left: 40,
			intro_font: 30,
			des_font: 28,
			ok_width: 130,
			button_dis: 100,
			animatorWidth: 340,
			animatorScale: 1.2,
			animatorIntroScale: [-.8, .8],
			cLine: 20,
			map: 'map-normal',
			gid: 1067,
			pipes: 'pipe_normal',
			water: 'water-normal',
			scale_maps: width / 492,
			score_margin_top: 100,
			inputWidth: 350,
			inputHeight: 50,
			font_score: 30,
			font_score_end_game: 50,
			tabs: 100,
			submitButtonScale: .8,
			endgamePadding: 20,
			level_font: 27,
			level_font_number: 40,
			level_font_tabs: 100,
			panelWidth: 465,
			panelHeight: 535,
			pivot: {
				y: 15
			}

		});
	} else if (width <= 810 && width > 768 && height <= 640) {
		/**
		 * 810 x 640
		 */
		data = Object.assign({}, data, {
			mapScreen: 3,
			pannel_margin_left: 40,
			intro_font: 30,
			des_font: 25,
			ok_width: 130,
			button_dis: 100,
			animatorWidth: 240,
			animatorScale: .8,
			cLine: 20,
			map: 'map_810_640',
			gid: 4051,
			pipes: 'pipe_810_640',
			water: 'water_810_640',
			scale_maps: width / 810,
			score_margin_top: 40,
			inputWidth: 350,
			inputHeight: 40,
			font_score: 30,
			font_score_end_game: 30,
			tabs: 100,
			submitButtonScale: .8,
			endgamePadding: 10,
			level_font: 27,
			level_font_number: 40,
			level_font_tabs: 100,
			panelWidth: 365,
			panelHeight: 435,
			pivot: {
				x: 20
			}
		});
	} else if (width <= 1080 && width > 810 && height <= 1020) {
		/**
		 * 1080 x 1020
		 */
		data = Object.assign({}, data, {
			mapScreen: 4,
			pannel_margin_left: 75,
			intro_font: 50,
			des_font: 40,
			ok_width: 230,
			button_dis: 100,
			animatorWidth: 350,
			animatorScale: 1.5,
			cLine: 30,
			map: 'map',
			gid: 2561,
			pipes: 'pipe',
			water: 'waters',
			scale_maps: width / 768,
			score_margin_top: 150,
			inputWidth: 400,
			inputHeight: 60,
			font_score: 40,
			tabs: 120,
			submitButtonScale: .8,
			level_font_tabs: 120,
			panelWidth: 550,
			panelHeight: 650,
			pivot: {
				y: 10
			}
		});
	} else if (width <= 1080 && width > 810 && height <= 1320 && height > 1020) {
		/**
		 * 1080 x 1320
		 */
		data = Object.assign({}, data, {
			mapScreen: 5,
			pannel_margin_left: 75,
			intro_font: 50,
			des_font: 40,
			ok_width: 230,
			button_dis: 100,
			animatorWidth: 500,
			animatorScale: 1.8,
			animatorIntroScale: [-.8, .8],
			cLine: 30,
			map: 'map',
			gid: 2561,
			pipes: 'pipe',
			water: 'waters',
			scale_maps: width / 768,
			score_margin_top: 200,
			inputWidth: 450,
			inputHeight: 60,
			font_score: 40,
			tabs: 120,
			submitButtonScale: 1,
			pivot: {
				y: 10
			}
		});
	} else if (width <= 1080 && width > 810 && height <= 1420 && height > 1320) {
		/**
		 * 1080 x 1420
		 */
		data = Object.assign({}, data, {
			mapScreen: 6,
			pannel_margin_left: 75,
			intro_font: 50,
			ok_width: 230,
			button_dis: 100,
			cLine: 30,
			animatorWidth: 502,
			animatorScale: 1.8,
			animatorIntroScale: [-0.8, .8],
			map: 'map',
			gid: 2561,
			pipes: 'pipe',
			water: 'waters',
			scale_maps: width / 768,
			score_margin_top: 200,
			inputWidth: 450,
			inputHeight: 60,
			pivot: {
				y: 10
			}
		});
	} else if (width > 1080) {
		data = Object.assign({}, data, {
			mapScreen: 7,
			pannel_margin_left: 40,
			intro_font: 30,
			des_font: 25,
			ok_width: 130,
			button_dis: 100,
			animatorWidth: 500,
			animatorScale: 1.8,
			cLine: 20,
			map: 'map',
			gid: 2561,
			pipes: 'pipe',
			water: 'waters',
			scale_maps: width / 768,
			score_margin_top: 40,
			inputWidth: 350,
			inputHeight: 40,
			font_score: 30,
			tabs: 100,
			submitButtonScale: .8,
			endgamePadding: 10,
			level_font: 27,
			level_font_number: 40,
			level_font_tabs: 100,
			panelWidth: 550,
			panelHeight: 640,
			pivot: {
				x: 20
			}
		});
	}

	Log.info(data);


	return data;
}