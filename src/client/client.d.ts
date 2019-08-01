
// THIS FILE IS AUTOGENERATED
// Generated on "7/16/2019, 7:13:40 PM"

declare namespace hashes {
  enum Weapon {
    AntiqueCavalryDagger = 24601201,
    BaseballBat = 2508868239,
    BrokenBottle = 4192643659,
    Crowbar = 2227010557,
    Fist = 2725352035,
    Flashlight = 2343591895,
    GolfClub = 1141786504,
    Hammer = 1317494643,
    Hatchet = 4191993645,
    BrassKnuckles = 3638508604,
    Knife = 2578778090,
    Machete = 3713923289,
    Switchblade = 3756226112,
    Nightstick = 1737195953,
    PipeWrench = 419712736,
    BattleAxe = 3441901897,
    PoolCue = 2484171525,
    StoneHatchet = 940833800,
    Pistol = 453432689,
    PistolMkII = 3219281620,
    CombatPistol = 1593441988,
    APPistol = 584646201,
    StunGun = 911657153,
    Pistol50 = 2578377531,
    SNSPistol = 3218215474,
    SNSPistolMkII = 2285322324,
    HeavyPistol = 3523564046,
    VintagePistol = 137902532,
    FlareGun = 1198879012,
    MarksmanPistol = 3696079510,
    HeavyRevolver = 3249783761,
    HeavyRevolverMkII = 3415619887,
    DoubleActionRevolver = 25487034,
    UpnAtomizer = 2939590305,
    MicroSMG = 324215364,
    SMG = 736523883,
    SMGMkII = 2024373456,
    AssaultSMG = 4024951519,
    CombatPDW = 171789620,
    MachinePistol = 3675956304,
    MiniSMG = 3173288789,
    UnholyHellbringer = 1198256469,
    PumpShotgun = 487013001,
    PumpShotgunMkII = 1432025498,
    SawedOffShotgun = 2017895192,
    AssaultShotgun = 3800352039,
    BullpupShotgun = 2640438543,
    Musket = 2828843422,
    HeavyShotgun = 984333226,
    DoubleBarrelShotgun = 401952761,
    SweeperShotgun = 317205821,
    AssaultRifle = 3220176749,
    AussaultRifleMkII = 961495388,
    CarbineRifle = 2210333304,
    CarbineRifleMkII = 4208062921,
    AdvancedRifle = 2937143193,
    SpecialCarbine = 3231910285,
    SpecialCarbineMkII = 2526821735,
    BullpupRifle = 2132975508,
    BullpupRifleMkII = 2228681469,
    CompactRifle = 1649403952,
    MG = 2634544996,
    CombatMG = 2144741730,
    CombatMGMkII = 3686625920,
    GusenbergSweeper = 1627465347,
    SniperRifle = 100416529,
    HeavySniper = 205991906,
    HeavySniperMkII = 177293209,
    MarksmanRifle = 3342088282,
    MarksmanRifleMkII = 1785463520,
    RPG = 2982836145,
    GrenadeLauncher = 2726580491,
    GrenadeLauncherSmoke = 13056645,
    Minigun = 1119849093,
    FireworkLauncher = 2138347493,
    Railgun = 1834241177,
    HomingLauncher = 1672152130,
    CompactGrenadeLauncher = 125959,
    Widowmaker = 3056410471,
    Grenade = 2481070269,
    BZGas = 2694266206,
    MolotovCocktail = 4256991824,
    StickyBomb = 1233104067,
    ProximityMines = 615608432,
    Snowballs = 741814745,
    PipeBombs = 2874559379,
    Baseball = 126349499,
    TearGas = 3125143736,
    Flare = 600439132,
    JerryCan = 314298409,
    Parachute = 1940617049,
    FireExtinguisher = 1532858877
  }
}

declare module "alt" {
  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;

    constructor(x: number, y: number, z: number);
  }

  export class BaseObject {
    readonly type: number;

    destroy(): void;
    getMeta(key: string): any;
    setMeta(key: string, p1: any): void;
  }

  export class WorldObject extends BaseObject {
    readonly pos: any;

  }

  export class Entity extends WorldObject {
    readonly id: number;
    readonly model: number;
    readonly rot: Object;

    getSyncedMeta(key: string): any;
  }

  export class Player extends Entity {
    readonly name: string;
    readonly scriptID: number;
    readonly vehicle: Vehicle|undefined|null;

    addWeaponComponent(weaponHash: number, componentHash: number): void;
    getCurrentWeapon(): number;
    getWeaponTintIndex(weaponHash: number): number;
    giveWeapon(weaponHash: number, ammoCount: number): void;
    removeAllWeapons(): void;
    removeWeapon(weaponHash: number): boolean;
    removeWeaponComponent(weaponHash: number, componentHash: number): void;
    setCurrentWeapon(weaponHash: number): void;
    setWeaponTintIndex(weaponHash: number, tintIndex: number): void;
    weaponHasComponent(weaponHash: number, componentHash: number): boolean;
  }

  export class Vehicle extends Entity {
    readonly gear: number;
    readonly rpm: number;
    readonly scriptID: number;
    readonly speed: number;

  }

  export class WebView extends BaseObject {
    isVisible: boolean;
    url: string;

    constructor(url: string, isOverlayVal: number|boolean, targetTexture: string);
    emit(evName: string, ...args: any[]): void;
    execJS(p0: string): void;
    focus(): void;
    off(evName: string, p1Fn: Function): void;
    on(evName: string, p1Fn: Function): void;
    unfocus(): void;
  }

  export class Blip extends BaseObject {
    alpha: number;
    asMissionCreator: boolean;
    bright: boolean;
    category: number;
    color: number;
    crewIndicatorVisible: boolean;
    flashInterval: number;
    flashTimer: number;
    flashes: boolean;
    flashesAlternate: boolean;
    friendIndicatorVisible: boolean;
    friendly: boolean;
    gxtName: string;
    headingIndicatorVisible: boolean;
    highDetail: boolean;
    name: string;
    number: number;
    outlineIndicatorVisible: boolean;
    position: Array<any>;
    priority: number;
    pulse: boolean;
    rotation: number;
    route: boolean;
    routeColor: number;
    scale: number;
    secondaryColor: number;
    shortRange: boolean;
    showCone: boolean;
    shrinked: boolean;
    sprite: number;
    tickVisible: boolean;

    fade(duration: number, p1: number): void;
  }

  export class AreaBlip extends Blip {

    constructor(x: number, y: number, z: number, width: number, height: number);
  }

  export class RadiusBlip extends Blip {

    constructor(x: number, y: number, z: number, radius: number);
  }

  export class PointBlip extends Blip {

    constructor(x: number, y: number, z: number);
  }



  /**
    type: 'function',
    name: 'addGxtText',
    description: 'Adds GXT text',
    parameters: [
    	{
    		name: 'key',
    		dataType: 'string',
    		description: 'Key of the GXT text'
    	},
    	{
    		name: 'text',
    		dataType: 'string',
    		description: 'Text'
    	},
    ]
    */
  export function addGxtText(key: string, textValue: string): void;

  /**
    type: 'function',
    name: 'beginScaleformMovieMethodMinimap',
    description: 'Works like GRAPHICS::_BEGIN_SCALEFORM_MOVIE_METHOD_HUD_COMPONENT native',
    parameters: [
    	{
    		name: 'method',
    		dataType: 'string',
    		description: 'Method name'
    	}
    ]
    */
  export function beginScaleformMovieMethodMinimap(methodName: string): boolean;

  /**
    type: 'function',
    name: 'clearInterval',
    description: 'Cancels a timed, repeating action which was previously established by a call to setInterval (MDN)',
    parameters: [
    	{
    		name: 'intervalID',
    		dataType: 'int',
    		description: 'The identifier of the repeated action you want to cancel'
    	}
    ]
    */
    /**
    type: 'function',
    name: 'clearTimeout',
    description: 'Cancels a timeout previously established by calling setTimeout (MDN)',
    parameters: [
    	{
    		name: 'timeoutID',
    		dataType: 'int',
    		description: 'The identifier of the timeout you want to cancel'
    	}
    ]
    */
  export function clearInterval(p0: number|number): void;

  /**
    type: 'function',
    name: 'clearInterval',
    description: 'Cancels a timed, repeating action which was previously established by a call to setInterval (MDN)',
    parameters: [
    	{
    		name: 'intervalID',
    		dataType: 'int',
    		description: 'The identifier of the repeated action you want to cancel'
    	}
    ]
    */
    /**
    type: 'function',
    name: 'clearTimeout',
    description: 'Cancels a timeout previously established by calling setTimeout (MDN)',
    parameters: [
    	{
    		name: 'timeoutID',
    		dataType: 'int',
    		description: 'The identifier of the timeout you want to cancel'
    	}
    ]
    */
  export function clearTimeout(p0: number|number): void;

  /**
    type: 'function',
    name: 'disableVoiceActivation',
    description: 'Disables Voice Activation',
    */
  export function disableVoiceActivation(): void;

  /**
    type: 'function',
    name: 'disableVoiceInput',
    description: 'Disables Voice Input',
    */
  export function disableVoiceInput(): boolean;

  /**
    type: 'function',
    name: 'disableVoiceTest',
    description: 'Disables Voice Test',
    */
  export function disableVoiceTest(): boolean;

  /**
    type: 'function',
    name: 'getDiscordInfo',
    description: 'Returns information about user from Discord',
    returns: {
    	dataType: 'object',
    	description: 'Discord Information Object',
    	properties: {
    		id: {
    			dataType: 'int',
    			description: "User's Snowflake ID"
    		},
    		name: {
    			dataType: 'string',
    			description: "User's name"
    		},
    		descriminator: {
    			dataType: 'string',
    			description: "User's Discriminator"
    		},
    		avatar: {
    			dataType: 'string',
    			description: "User's avatar URL"
    		}
    	}
    }
    */
  export function discordInfo(): Object|undefined|null;

  /**
     * Emit a client script event
     * */
  export function emit(name: string, ...args: any[]): void;

  /**
    type: 'function',
    name: 'emitServer',
    description: 'Emit event to server',
    parameters: [
    	{
    		name: 'eventName',
    		dataType: 'string',
    		description: 'Name of the event'
    	},
    	{
    		name: 'args',
    		spread: true,
    		optional: true,
    		dataType: 'object'
    	}
    ]
    */
  export function emitServer(name: string, ...args: any[]): void;

  /**
    type: 'function',
    name: 'enableVoiceActivation',
    description: 'Enables Voice Activation',
    parameters: [
    	{
    		name: 'activateOn',
    		dataType: 'double',
    		description: ''
    	},
    	{
    		name: 'activationTime',
    		dataType: 'int',
    		description: ''
    	}
    ]
    */
  export function enableVoiceActivation(activateOn: number, activationTime: number): void;

  /**
    type: 'function',
    name: 'enableVoiceInput',
    description: 'Enables Voice Input',
    */
  export function enableVoiceInput(): boolean;

  /**
    type: 'function',
    name: 'enableVoiceTest',
    description: 'Enables Voice Test',
    */
  export function enableVoiceTest(): boolean;

  /**
    type: 'function',
    name: 'gameControlsEnabled',
    description: 'Returns a bool if is game controls enabled',
    returns: {
    	dataType: 'bool',
    	description: 'If is game controls enabled'
    }
    */
  export function gameControlsEnabled(): boolean;
  export function getCursorPos(): Object;

  /**
    type: 'function',
    name: 'getGxtText',
    description: 'Gets a GXT text',
    parameters: [
    	{
    		name: 'key',
    		dataType: 'string',
    		description: 'Key of the GXT text'
    	}
    ],
    returns: {
    	dataType: 'string',
    	description: 'Text of GTX text'
    }
    */
  export function getGxtText(key: string): string;

  /**
    type: 'function',
    name: 'getLicenseHash',
    description: 'Returns license hash',
    returns: {
    	dataType: 'string',
    	description: 'License hash'
    }
    */
  export function getLicenseHash(): string;

  /**
    type: 'function',
    name: 'getLocalPlayer',
    description: 'Returns a local player',
    returns: {
    	dataType: 'Player',
    	description: 'Local Player object'
    }
    */
  export function getLocalPlayer(): Player;

  /**
    type: 'function',
    name: 'getMicLevel',
    description: 'Returns microphone level',
    returns: {
    	dataType: 'double',
    	description: 'Microphone Level'
    }
    */
  export function getMicLevel(): number;
  export function getMsPerGameMinute(): number;

  //Voice functions
    /**
    type: 'function',
    name: 'initVoice',
    description: 'Initializes voice system',
    */
  export function initVoice(bitrate: number): boolean;

  /**
    type: 'function',
    name: 'isInSandbox',
    description: 'Toggles camera freeze state',
    returns: [
    	{
    		dataType: 'bool',
    		description: 'If is in sandbox'
    	}
    ]
    */
  export function isInSandbox(): boolean;

  /**
    type: 'function',
    name: 'isTextureExistInArchetype',
    description: 'Checks if target texture exists in archetype',
    parameters: [
    	{
    		name: 'model',
    		dataType: 'int',
    		description: 'Model Hash'
    	},
    	{
    		name: 'textureName',
    		dataType: 'string',
    		description: 'Target texture name'
    	}
    ]
    */
  export function isTextureExistInArchetype(modelHash: number, modelName: string): boolean;

  /**
    type: 'function',
    name: 'loadModel',
    description: 'Loads the model',
    parameters: [
    	{
    		name: 'model',
    		dataType: 'int',
    		description: 'Model Hash'
    	}
    ]
    */
  export function loadModel(modelHash: number): void;

  /**
    type: 'function',
    name: 'loadModelAsync',
    description: 'Loads the model',
    parameters: [
    	{
    		name: 'model',
    		dataType: 'int',
    		description: 'Model Hash'
    	}
    ]
    */
  export function loadModelAsync(modelHash: number): void;

  /**
    type: 'function',
    name: 'log',
    description: 'Log a message',
    parameters: [
    	{
    		name: 'args',
    		spread: true,
    		dataType: 'object'
    	}
    ]
    */
  export function log(...val: any[]): void;

  /**
    type: 'function',
    name: 'logError',
    description: 'Log a error message',
    parameters: [
    	{
    		name: 'args',
    		spread: true,
    		dataType: 'object'
    	}
    ]
    */
  export function logError(...val: any[]): void;

  /**
    type: 'function',
    name: 'logWarning',
    description: 'Log a warning message',
    parameters: [
    	{
    		name: 'args',
    		spread: true,
    		dataType: 'object'
    	}
    ]
    */
  export function logWarning(...val: any[]): void;

  /**
    type: 'function',
    name: 'nextTick',
    description: 'Executes code on next tick',
    parameters: [
    	{
    		name: 'function',
    		dataType: 'function',
    		description: 'A function to be executed on next tick'
    	}
    ]
    */
  export function nextTick(p0Fn: Function): void;
  export function off(evName: string, p1Fn: Function): void;
  export function offServer(evName: string, p1Fn: Function): void;

  /**
    type: 'function',
    name: 'on',
    description: 'Event handler function for events sent from system or other resource',
    parameters: [
    	{
    		name: 'eventName',
    		dataType: 'string',
    		description: 'Name of the event'
    	},
    	{
    		name: 'callback',
    		dataType: 'function',
    		description: 'Callback function',
    		arguments: [
    			{
    				name: 'args',
    				spread: true,
    				dataType: 'object'
    			}
    		]
    	}
    ]
    */
  export function on(evName: string, p1Fn: Function): void;

  /**
    type: 'function',
    name: 'onServer',
    description: 'Event handler function for events sent by server',
    parameters: [
    	{
    		name: 'eventName',
    		dataType: 'string',
    		description: 'Name of the event'
    	},
    	{
    		name: 'callback',
    		dataType: 'function',
    		description: 'Callback function',
    		arguments: [
    			{
    				name: 'args',
    				spread: true,
    				dataType: 'object'
    			}
    		]
    	}
    ]
    */
  export function onServer(evName: string, p1Fn: Function): void;

  /**
    type: 'function',
    name: 'removeGxtText',
    description: 'Removes a GXT text',
    parameters: [
    	{
    		name: 'key',
    		dataType: 'string',
    		description: 'Key of the GXT text'
    	}
    ]
    */
  export function removeGxtText(key: string): void;

  /**
    type: 'function',
    name: 'removeIpl',
    description: 'Removes the IPL file',
    parameters: [
    	{
    		name: 'iplName',
    		dataType: 'string',
    		description: 'Name of IPL'
    	}
    ]
    */
  export function removeIpl(iplName: string): void;

  /**
    type: 'function',
    name: 'requestIpl',
    description: 'Requests the IPL file',
    parameters: [
    	{
    		name: 'iplName',
    		dataType: 'string',
    		description: 'Name of IPL'
    	}
    ]
    */
  export function requestIpl(iplName: string): void;
  export function saveScreenshot(fileName: string): boolean;

  /**
    type: 'function',
    name: 'setCamFrozen',
    description: 'Toggles camera freeze state',
    parameters: [
    	{
    		name: 'state',
    		dataType: 'bool',
    		description: '`true` for freeze camera, `false` to unfreeze camera'
    	}
    ]
    */
  export function setCamFrozen(state: boolean): void;
  export function setCursorPos(pos: Object): void;

  /**
    type: 'function',
    name: 'setInterval',
    description: 'Repeatedly calls a function, with a fixed time delay between each call (MDN)',
    parameters: [
    	{
    		name: 'function',
    		dataType: 'function',
    		description: 'A function to be executed every delay milliseconds'
    	},
    	{
    		name: 'delay',
    		dataType: 'int',
    		description: 'The time, in milliseconds, the timer should delay in between executions of the specified function or code'
    	}
    ],
    returns: {
    	dataType: 'int',
    	description: 'Non-zero value which identifies the timer created by the call to setInterval this value can be passed to clearInterval to cancel the timeout'
    }
    */
  export function setInterval(idFn: Function, id: number|number): number;

  /**
    type: 'function',
    name: 'setMicGain',
    description: 'Sets Microphone Gain',
    parameters: [
    	{
    		name: 'micGain',
    		dataType: 'double',
    		description: 'Gain'
    	}
    ]
    */
  export function setMicGain(micGain: number): void;

  /**
    type: 'function',
    name: 'setModel',
    description: 'Set model for local player',
    parameters: [
    	{
    		name: 'modelName',
    		dataType: 'string',
    		description: 'Name of Model'
    	}
    ]
    */
  export function setModel(modelName: string): void;

  /**
    type: 'function',
    name: 'setMsPerGameMinute',
    description: 'Set milliseconds count in game minute',
    parameters: [
    	{
    		name: 'msCount',
    		dataType: 'int',
    		description: 'Milliseconds in game minute'
    	}
    ]
    */
  export function setMsPerGameMinute(ms: number): void;

  /**
    type: 'function',
    name: 'setTimeout',
    description: 'Sets a timer which executes a function once the timer expires (MDN)',
    parameters: [
    	{
    		name: 'function',
    		dataType: 'function',
    		description: 'A function to be executed after the timer expires'
    	},
    	{
    		name: 'delay',
    		dataType: 'int',
    		description: 'The time, in milliseconds, the timer should wait before the specified function is executed'
    	}
    ],
    returns: {
    	dataType: 'int',
    	description: 'Positive integer value which identifies the timer created by the call to setTimeout this value can be passed to clearTimeout to cancel the timeout'
    }
    */
  export function setTimeout(idFn: Function, id: number|number): number;

  /**
    type: 'function',
    name: 'showCursor',
    description: 'Toggles a cursor visibility',
    parameters: [
    	{
    		name: 'state',
    		dataType: 'bool',
    		description: '`true` for show cursor, `false` to hide cursor'
    	}
    ]
    */
  export function showCursor(p0: boolean): void;

  /**
    type: 'function',
    name: 'toggleGameControls',
    description: 'Toggles a game controls',
    parameters: [
    	{
    		name: 'state',
    		dataType: 'bool',
    		description: '`true` for enable controls, `false` to disable controls'
    	}
    ]
    */
  export function toggleGameControls(state: boolean): void;
}