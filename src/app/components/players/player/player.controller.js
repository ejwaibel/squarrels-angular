export
default class PlayerController {
	constructor($rootScope, $scope, $localStorage, $log, _, playersStore, playerModel, websocket) {
		'ngInject';

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.$log = $log;

		this._ = _;
		this.playerModel = playerModel;
		this.playersStore = playersStore;
		this.ws = websocket;

		this.$log.info('constructor()', this);
	}

	$onInit() {
		this.$log.info('$onInit()', this);
	}

	$onDestroy() {
		return () => {
			this.$log.info('destroy', this);
		};
	}
};
