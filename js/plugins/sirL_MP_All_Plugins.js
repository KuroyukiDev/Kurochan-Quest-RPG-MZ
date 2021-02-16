/*:
@target MZ
@title sirL_MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34
@author SirLegna
@date February 15, 2021
@url https://sirlegna.itch.io/sir-legnas-plugin-generator 
@filename sirL_MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34
Please reach out to me for any help or just to talk about your project

@plugindesc Debug Hash #34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34
@command Choice Location.choiceLocation
@text Set Choice Location by X and Y
@desc Sets the location where the choice box will appear by X and Y
	@arg locX
	@text Location X
	@type text
	@desc The javascript code that returns the X pixel value for the choice box
	@default return 0;

	@arg locY
	@text Location Y
	@type text
	@desc The javascript code that returns the Y pixel value for the choice box
	@default return 0;


@command Choice Location.choiceLocationTemp
@text Set a Temporary Choice Location by X and Y
@desc Sets the location where the choice box will appear by X and Y for the next choice box
	@arg locX
	@text Location X
	@type text
	@desc The javascript code that returns the X pixel value for the choice box
	@default return 0;

	@arg locY
	@text Location Y
	@type text
	@desc The javascript code that returns the Y pixel value for the choice box
	@default return 0;


@command Choice Location.resetChoiceLocation
@text Reset choice box behavior to default
@desc Sets the location where the choice box will appear by X and Y

@command Delay Switches and Variables.setSelfSwitchDelay
@text Set Self-Switch Delay
@desc Set the self-switch to change to a state after a delay
	@arg DelayType
	@text Type of Delay
	@type select
	@desc The type of delay you would like to have
	@default 4
	@option Battle Count
	@value 0
	@option Win Count
	@value 1
	@option Escape Count
	@value 2
	@option Save Count
	@value 3
	@option Frame Count
	@value 4
	@option Play Time Seconds
	@value 5
	@option Steps
	@value 6

	@arg mapId
	@text Map Id Number
	@type number
	@desc The Map Id that has the event  you want to use the self-switch on. 0 means this map
	@default 0
	@min 0

	@arg eventId
	@text Event Id Number
	@type number
	@desc The Event Id that has the self-switch you want to delay. 0 means this event
	@default 0
	@min 0

	@arg DelayAmount
	@text Delay Amount
	@type number
	@desc The amount of delay after this plugin command is called
	@default 60
	@min 1

	@arg sSLetter
	@text Self Switch Letter
	@type select
	@desc Self switch to operate.
	@default A
	@option A
	@option B
	@option C
	@option D

	@arg Operation
	@text Operation
	@type boolean
	@desc Selects whether to turn the self switch ON or OFF
	@default true
	@on ON
	@off OFF


@command Delay Switches and Variables.setSwitchDelay
@text Set Switch Delay
@desc Set the switch to change to a state after a delay
	@arg DelayType
	@text Type of Delay
	@type select
	@desc The type of delay you would like to have
	@default 4
	@option Battle Count
	@value 0
	@option Win Count
	@value 1
	@option Escape Count
	@value 2
	@option Save Count
	@value 3
	@option Frame Count
	@value 4
	@option Play Time Seconds
	@value 5
	@option Steps
	@value 6

	@arg DelayAmount
	@text Delay Amount
	@type number
	@desc The amount of delay after this plugin command is called
	@default 60
	@min 1

	@arg switchId
	@text Switch
	@type switch
	@desc The switch which you would like to delay after this plugin command is called
	@default 1

	@arg Operation
	@text Operation
	@type boolean
	@desc Selects whether to turn the self switch ON or OFF
	@default true
	@on ON
	@off OFF


@command Delay Switches and Variables.setVariableDelay
@text Set Variable Delay
@desc Set the variable to change to a value after a delay
	@arg DelayType
	@text Type of Delay
	@type select
	@desc The type of delay you would like to have
	@default 4
	@option Battle Count
	@value 0
	@option Win Count
	@value 1
	@option Escape Count
	@value 2
	@option Save Count
	@value 3
	@option Frame Count
	@value 4
	@option Play Time Seconds
	@value 5
	@option Steps
	@value 6

	@arg DelayAmount
	@text Delay Amount
	@type number
	@desc The amount of delay after this plugin command is called
	@default 60
	@min 1

	@arg variableId
	@text Variable
	@type variable
	@desc The variable which you would like to delay after this plugin command is called
	@default 1

	@arg Operand
	@text Operand
	@type multiline_string
	@desc Code that will be executed when the delay has passed
	@default return (v[1] || 0) + 1


@command Better Script Command.ScriptCommand
@text Script Command
@desc Will execute any length script placed in here
	@arg script
	@text Script
	@type multiline_string
	@desc Place any executable javascript here.
	@default 


@command Event Cloner.SpawnClonedEvent
@text Spawn Cloned Event
@desc Will spawn a cloned event
	@arg mapId
	@text Map Id
	@type number
	@desc Map Index that has the original event.
	@default 1
	@min 1

	@arg eventId
	@text Event Id
	@type number
	@desc Event Index that has the original event.
	@default 1
	@min 1

	@arg overwriteData
	@text Clone Overwritten Data
	@type text[]
	@desc This is the list of data that you want to change from the original event to the clone, such as position
	@default ["_x:$gamePlayer.x","_realX:$gamePlayer.x","_y:$gamePlayer.y","_realY:$gamePlayer.y"]


@command Position BattleBacks.SetAnimatedBattleBacks
@text Set Battle Backs Animation
@desc Sets the batteback to have animation
	@arg animatedBattleBacks
	@text Animate BattleBacks?
	@type boolean
	@desc Should your battlebacks be refreshed per update?
	@default false
	@on Animated
	@off Static


@command Position BattleBacks.Set2Default
@text Set to default
@desc Sets the batteback layout to the default style
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2


@command Position BattleBacks.Set2Screen
@text Set to Screen Size mode
@desc Sets the batteback layout to use the Screen Size
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2


@command Position BattleBacks.Set2UI
@text Set to UI Size mode
@desc Sets the batteback layout to use the UI Size
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2


@command Position BattleBacks.Set2Custom
@text Set to custom batteback positioning
@desc Sets the batteback layout to use the UI Size
	@arg layer
	@text BattleBack Layer
	@type number
	@desc Define which layer you would like to set
	@default 1
	@max 1
	@min 2

	@arg bbWidth
	@text BattleBack Width
	@type multiline_string
	@desc Define the width of the batteback in pixels. You can use javascript as well.
	@default Math.floor((1000 * Graphics.width) / 816)

	@arg bbHeight
	@text BattleBack Height
	@type multiline_string
	@desc Define the height of the batteback in pixels. You can use javascript as well.
	@default Math.floor((740 * Graphics.height) / 624)

	@arg bbXOff
	@text BattleBack X Offset
	@type multiline_string
	@desc Define the X offset of the batteback in pixels. You can use javascript as well.
	@default (Graphics.width - bb.width) / 2

	@arg bbYOff4SideView
	@text BattleBack Y Offset in SideView mode
	@type multiline_string
	@desc Define the Y offset of the batteback in pixels only while in side-view mode. You can use javascript as well.
	@default Graphics.height - bb.height

	@arg bbYOff4FrontView
	@text BattleBack Y Offset in FrontView mode
	@type multiline_string
	@desc Define the Y offset of the batteback in pixels only while in front view mode. You can use javascript as well.
	@default 0

	@arg bbScale
	@text BattleBack Scale
	@type multiline_string
	@desc Define the scale of the batteback in ratio. You can use javascript as well.
	@default Math.max(ratioX, ratioY, 1.0)



@param Accent Manager

@param AccentManager.hideAfterChar
@text Character to hide text after
@parent Accent Manager
@desc This text differentiates the show message name from the accent name.
@default |
@type text

@param AccentManager.accents
@text Accents
@parent Accent Manager
@desc The different types of accents
@default []
@type struct<accent>[]

@param AccentManager.generalRules
@text General Rules
@parent Accent Manager
@desc All messages will have these general rules applied.
@default []
@type struct<rule>[]

@param Tile Event

@param TileEvent.connections
@text Links
@parent Tile Event
@desc The connection between a group of tile ids and a group of common events
@default []
@type struct<SirLMPTileEventLink>[]

@param Enemy Escape Revamp

@param EnemyEscapeRevamp.deem
@text Display Enemy Escape Message
@parent Enemy Escape Revamp
@desc Define how you would like the escape message to be displayed when the enemy attempts to make an escape.
@default 1
@type select
@option None
@value 0
@option BattleLog
@value 1
@option Message Box
@value 2

@param Position BattleBacks

@param PositionBattleBacks.battleBacks
@text List of BattleBacks
@parent Position BattleBacks
@desc The first entry is batteback1. The second entry is batteback2.
@default ["{\"PositionBattleBacks.TypeOfAdjustment\":\"Default\",\"PositionBattleBacks.CustomOptionsHeader\":\"\",\"PositionBattleBacks.bbWidth\":\"Math.floor((1000 * Graphics.width) / 816)\",\"PositionBattleBacks.bbHeight\":\"Math.floor((740 * Graphics.height) / 624)\",\"PositionBattleBacks.bbXOff\":\"(Graphics.width - bb.width) / 2\",\"PositionBattleBacks.bbYOff4SideView\":\"Graphics.height - bb.height\",\"PositionBattleBacks.bbYOff4FrontView\":\"0\",\"PositionBattleBacks.bbScale\":\"Math.max(ratioX, ratioY, 1.0)\"}","{\"PositionBattleBacks.TypeOfAdjustment\":\"Default\",\"PositionBattleBacks.CustomOptionsHeader\":\"\",\"PositionBattleBacks.bbWidth\":\"Math.floor((1000 * Graphics.width) / 816)\",\"PositionBattleBacks.bbHeight\":\"Math.floor((740 * Graphics.height) / 624)\",\"PositionBattleBacks.bbXOff\":\"(Graphics.width - bb.width) / 2\",\"PositionBattleBacks.bbYOff4SideView\":\"Graphics.height - bb.height\",\"PositionBattleBacks.bbYOff4FrontView\":\"0\",\"PositionBattleBacks.bbScale\":\"Math.max(ratioX, ratioY, 1.0)\"}"]
@type struct<SirLBattleBack>[]

@param PositionBattleBacks.animatedBattleBacks
@text Animate BattleBacks?
@parent Position BattleBacks
@desc Should your battlebacks be refreshed per update?
@default false
@type boolean
@on Animated
@off Static

@param Skill Cost Display

@param SkillCostDisplay.multipleCosts
@text Show costs
@parent Skill Cost Display
@desc To show multiple or single (default) costs when a skill has more than one costs above 0.
@default true
@type boolean
@on Multiple
@off Single

@param SkillCostDisplay.costLabel
@text Label Location
@parent Skill Cost Display
@desc Allows label of skill type to be next to the cost
@default right
@type combo
@option left
@option right
@option none

@param SkillCostDisplay.skillTypes
@text List of Skill types to display
@parent Skill Cost Display
@desc Define the skill types for the costs
@default ["{\"SkillCostDisplay.Skill Type Name\":\"Tp\",\"SkillCostDisplay.Skill Type Color\":\"#00e060\"}","{\"SkillCostDisplay.Skill Type Name\":\"Mp\",\"SkillCostDisplay.Skill Type Color\":\"#40c0f0\"}"]
@type struct<SkillCostDisplaySkillType>[]

@param SkillCostDisplay.DisplayFree
@text Display Free
@parent Skill Cost Display

@param SkillCostDisplay.ShowFree
@text Show Free
@parent SkillCostDisplay.DisplayFree
@desc Do you want the word "FREE" if the skill costs nothing?
@default true
@type boolean
@on Show
@off hide

@param SkillCostDisplay.FreeColor
@text Free Color Code
@parent SkillCostDisplay.DisplayFree
@desc If you are showing free, what color would you like
@default #FF0000
@type text

@param SkillCostDisplay.FreeTerm
@text Term for Free
@parent SkillCostDisplay.DisplayFree
@desc If you are showing free, what term would you like for free
@default FREE
@type text

@param Skill Cost Formula

@param SkillCostFormula.Alt Types
@text List of Alternative Skill types
@parent Skill Cost Formula
@desc Define the skill types that can be used for costs
@default ["{\"SkillCostFormula.Alt Name\":\"Hp\",\"SkillCostFormula.Alt Source\":\"a._hp\"}"]
@type struct<SirLMPSkillCostFormulaAltTypeDef>[]

@param Skill Cost Sorter

@param SkillCostSorter.Sorts
@text List of the ways to sort
@parent Skill Cost Sorter
@desc The code will sort from top to bottom of this list
@default ["{\"SkillCostSorter.eval\":\"skill.mpCost\",\"SkillCostSorter.order\":\"true\"}"]
@type struct<SirLMPSkillCostSorterSorter>[]

@ End of params
@help
Generator Version = 1.0.0
This plugin is composed of multiple plugins, which are listed here:
	1. v2.0.0 - Accent Manager
	2. v2.0.0 - Choice Location
	3. v1.0.1 - Delay Switches and Variables
	4. v1.0.0 - Armor Requirement Revamp
	5. v1.0.0 - Item Requirement Revamp
	6. v1.0.0 - Weapon Requirement Revamp
	7. v1.0.0 - Better Script Command
	8. v1.0.0 - Tile-based Scaling
	9. v1.1.0 - Event Cloner
	10. v1.1.2 - Tile Event
	11. v1.0.0 - Enemy Escape Revamp
	12. v1.0.0 - Enemy Stats Formula
	13. v1.0.1 - Item Cost Formula
	14. v1.0.0 - Item Morpher
	15. v2.0.2 - Position BattleBacks
	16. v1.0.0 - Skill Cost Display
	17. v1.0.0 - Skill Cost Formula
	18. v1.0.1 - Skill Cost Sorter
	19. v1.0.0 - Weapon Stats Restrictions

===== v2.0.0 - Accent Manager =====
This plugin can replace text based on an accent or general replacements in a show text message box. Similar to Chrono Cross.
After setting up the plugin parameter, use the name field in the show text with either the accent as the name or the name first then the "Character to hide text after" character, default | then accent. Like
	Robin | British

Core functionality that this plugin works with:
	* Game_Interpreter.prototype.command101

CHANGELOG
	v2.0.0 - Removed wildcards and integrated the plugin with MZ and the generator.
	v1.0.1 - Added wildcards so that certain characters in a part of a message can be anything you would like.
	v1.0.0 - Set accents for characters than using those accents to replace keywords with accented ones. Also, you can use the default accent to set global rules across all messages. Special Thanks to Michael Morris for the script which had a way to add messages into RPG Maker MV without more issues. It can be found here: https://forums.rpgmakerweb.com/index.php?threads/random-dialogue-v1-03a.57313/

===== v2.0.0 - Choice Location =====
This plugin allows you to declare where you would like the choice window to appear.

Core functionality that this plugin works with:
	* Game_Interpreter.prototype.command101
	* Window_ChoiceList.prototype.windowX
	* Window_ChoiceList.prototype.windowY

CHANGELOG
	v2.0.0 - Integrated into the generator
	v1.0.0 - Fixed bug where choice box doesn't appear after the series [Message, plugin]
	v0.0.1 - Change location of choice box

===== v1.0.1 - Delay Switches and Variables =====

This plugin allows you to delay changes to self-switches, switches, and variables. It can be delayed by number of in game seconds, frames, battles, wins, escapes, steps or saves.

Note:
	That your changes will apply when the delay is up, even if it was changed another way recently.

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Game_System.prototype.onBattleStart
	* Game_System.prototype.onBattleWin
	* Game_System.prototype.onBattleEscape
	* Game_System.prototype.onBeforeSave
	* SceneManager.updateFrameCount
	* Game_Party.prototype.increaseSteps

CHANGELOG
	v1.0.1 - Self-switches now can use this event and this map ids
	v1.0.0 - Allows delay to self-switches, switches and variables

===== v1.0.0 - Armor Requirement Revamp =====
This plugin allows you to require armor from 0 to any number or no requirement at all.

Note tags for Skills:
	* Require No Armor
		 <SirL.No_Armor:[ExceptionEquipmentId]>
	Skill is only usable if there are no armor equipped, replace ExceptionEquipmentId with the id of the equipment you want to skip over the check when looking for no armor. You separate the ExceptionEquipmentId with a comma

	* Additional Armor Requirement
		 <SirL.Required_Armor:{"EquipmentId":[ARMORID],"EquipmentId":[ARMORID]}>
	Add  Armor Type requirements, replace EquipmentId with the equipment type id you want to check for specific armor at and replace ARMORID with the Id of the Armor Type you would like to be required. You separate the Armor Type Ids with a comma

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.meetsSkillConditions

CHANGELOG
	v1.0.0 - Added No Armor and Additional Armor Note tags

===== v1.0.0 - Item Requirement Revamp =====
This plugin allows you to require items from 0 to any number or no requirement at all.

Note tags for Skills:
	* Require Empty Inventory
		 <SirL.EmptyInventory>
	Skill is only usable if there are no items in your inventory

	* Require Items
		 <SirL.Required_Item:{"ItemId":AMOUNT,"ItemId":AMOUNT}>
	Add  Item requirements, replace ItemId with the Item id you want to restrict at the AMOUNT value, the amount can be any number if negative it rounds to zero. And zero means there must be none of that item in your inventory to use the skill.

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.meetsSkillConditions

CHANGELOG
	v1.0.0 - Added No Item and Additional Item Note tags

===== v1.0.0 - Weapon Requirement Revamp =====
This plugin allows you to require weapons from 0 to any number or no requirement at all.

Note tags for Skills:
	* Require No Weapon
		 <SirL.No_Weapon>
	Skill is only usable if there are no weapons equipped

	* Additional Weapon Requirement
		 <SirL.Required_Weapon:[WEAPONID]>
	Add more weapon requirements than 2, replace WEAPONID with the Id of the Weapon you would like to be required. You separate the weapon Ids with a comma

Core functionality that this plugin works with:
	* Game_Actor.prototype.isSkillWtypeOk

CHANGELOG
	v1.0.0 - Added No Weapon and Additional Weapon Note tags

===== v1.0.0 - Better Script Command =====
This plugin allows you to have a scroll bar for script calls instead of it just removing code if it goes past the bottom of the window.

CHANGELOG
	v1.0.0 - Scrollable Script Calls

===== v1.0.0 - Tile-based Scaling =====
This plugin will auto scale the game components to reduce black bars while keeping the UI components fully visible. 

This plugin is completely plug and play.

Plugin Developer Note:
	If you are using plugins with or creating custom scenes in your game which require preparing before rendering, you must use prepare function with argument variables being the non-underscore version such as:
	MyCustomScene.prototype.prepare = function(x){this._x = x;}

Core functionality that this plugin works with:
	* SceneManager.changeScene
	* SceneManager.updateScene
	* Graphics._onWindowResize
	* Game_System.prototype.initialize
	* Scene_Map.prototype.fadeOutForTransfer

CHANGELOG
	v1.0.0 - Dynamical scale game components to better fit window size

===== v1.1.0 - Event Cloner =====
This plugin allows you to clone an event with specific id.
Note: 
	* If id already exists, it will overwrite the event with with the new one.
	* Events will save, however transferring maps will cause spawned events to despawn.

To use in scripts:
	SirL.MPEventCloner.getEventAtId(mapId, eventId, eventOverride)
		mapId = The mapId you want to pull the event from
		eventId = The eventId you want to use as the base for the clone
		eventOverride = The object that allows you to change that event's data parameters.
			Example: {"_eventId":1000, "_x":2, "_y":18, "_realX":3, "_realY":18}
			This will change the eventId and it location in the gameMap array to 1000, set the event real position at (3,18) with a slide to position (2,18)

Core functionality that this plugin works with:
	* DataManager.loadMapData
	* Scene_Map.prototype.fadeOutForTransfer

CHANGELOG
	v1.1.0 - Added Plugin Command
	v1.0.1 - Null events were causing game crash on load
	v1.0.0 - Allows you to clone an event with a specific id with script call only

===== v1.1.2 - Tile Event =====
This plugin allows you to assign Common Events to tiles with one of three actions, on tile, by side tile, or button pressed.

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Game_Player.prototype.updateNonmoving

CHANGELOG
	v1.1.2 - Fixed bug to not break when it cannot find a Tile Event nearby, and added only cases for Button, Stand On and Stand By.
	v1.0.0 - Fixed bug were if the tile you were standing on had potential Tile Event, then it wouldn't check nearby ones
	v0.0.3 - Added default value plugin parameters to prevent empty data bug
	v0.0.2 - Left some testing code in, oops
	v0.0.1 - Allow tile events for stand on, by, and button pressed

===== v1.0.0 - Enemy Escape Revamp =====
This plugin make each enemy have escape percentages like the party does.

Note tags for Enemies:
	* Enemy Escape Experience Reward
		 <SirL.escapeExp:AMOUNT>
	This is defining how much experiene the enemy will give when they escape from the battle. The AMOUNT is the number which is the amount this enemey will give when they escape

	* Enemy Escape Gold Reward
		 <SirL.escapeGold:AMOUNT>
	This is defining how much gold the enemy will give when they escape from the battle. The AMOUNT is the number which is the amount this enemey will give when they escape

	* Enemy Escape Drop Rewards
		 <SirL.escapeDrops:[{"type":"TYPE","probability":PROB,"id":INDEX}]>
	This is defining the drops the enemy will leave when they escape from the battle. The TYPE must be either "Item","Weapon","Armor". PROB is the number of likelihood such like 1/PROB. INDEX is the index number that represent the drop

Core functionality that this plugin works with:
	* BattleManager.makeEscapeRatio
	* Game_Battler.prototype.escape
	* Game_BattlerBase.prototype.initMembers
	* Game_Troop.prototype.expTotal
	* Game_Troop.prototype.goldTotal
	* Game_Troop.prototype.makeDropItems

CHANGELOG
	v0.0.1 - Allow enemies to fail at escaping with drops being fixed values

===== v1.0.0 - Enemy Stats Formula =====
This plugin allows you to have dynamic params, EXP and gold using similar formulas like the damage formula.

Note tags for Enemies:
	* Max HP Param
		 <SirL.mhp:FORMULA>
	Max HP for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Note: The value 0 will default to 1. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Max MP Param
		 <SirL.mmp:FORMULA>
	Max MP for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Attack Param
		 <SirL.atk:FORMULA>
	Attack for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Defense Param
		 <SirL.def:FORMULA>
	Defense for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Magic Attack Param
		 <SirL.mat:FORMULA>
	Magic Attack for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Magic Defense Param
		 <SirL.mdf:FORMULA>
	Magic Defense for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Agility Param
		 <SirL.agi:FORMULA>
	Agility for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Luck Param
		 <SirL.luk:FORMULA>
	Luck for the enemy is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Experience Param
		 <SirL.exp:FORMULA>
	Experience that is reward upon enemy death is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

	* Gold Param
		 <SirL.gold:FORMULA>
	Gold that is reward upon enemy death is defined using a formula that is used in calculations. The FORMULA must be like the damage formula. Keys: e = enemy, v = game variable, t = $gameTroop, p = $gameParty

Core functionality that this plugin works with:
	* Game_Enemy.prototype.paramBase
	* Game_Enemy.prototype.exp
	* Game_Enemy.prototype.gold

CHANGELOG
	v1.0.0 - The Enemy Params and Rewards can be defined with formulas in their note tags

===== v1.0.1 - Item Cost Formula =====
This plugin allows you to define item price with a formula like damage formula.

Note tags for Items:
	* Define Item Price
		 <SirL.setItemPrice:FORMULA>
	Defines the item price that will be used during buying. Store specific prices will override the price still. FORMULA can be structured like damage formula with out a or b, instead you have 'i' for this item, 'p' for party and 'v' for gameVariable.

	* Define Item Sell Value
		 <SirL.setItemSellValue:FORMULA>
	Defines the item price that will be used during selling. FORMULA can be structured like damage formula with out a or b, instead you have 'i' for this item, 'p' for party, 'v' for gameVariable and 'buyPrice' for the value of SirL.setItemPrice if available

Core functionality that this plugin works with:
	* Window_ShopBuy.prototype.makeItemList
	* Scene_Shop.prototype.sellingPrice

CHANGELOG
	v1.0.1 - Remembered to include item variable 'i' in formulas
	v1.0.0 - Item price is now defined by formulas

===== v1.0.0 - Item Morpher =====
This plugin allows you to morph an item on consumption (use).

Note tags for Items:
	* Morph to next item
		 <SirL.morphItem:#>
	The item with the id # replaces the used item.

Core functionality that this plugin works with:
	* Game_Party.prototype.consumeItem

CHANGELOG
	v1.0.0 - Allow you to morph an item on consumption

===== v2.0.2 - Position BattleBacks =====
This plugin allows you to modify how battlebacks are loaded in battle, specifically their positioning, resolution, and animation. You can do this via the plugin parameters or plugin commands. 

Tip:
	Graphics.frameCount%60 <- counts per frame up to 60 then reset to 0, Good for when trying to do animation.

Note: Plugin Commands overwrite Plugin Parameters

Core functionality that this plugin works with:
	* Game_System.prototype.initialize
	* Sprite_Battleback.prototype.adjustPosition
	* Spriteset_Battle.prototype.updateBattleback

CHANGELOG
	v2.0.2 - Plugin Commands actuall work
	v2.0.1 - Now hash the savables, preventing game crashing bug
	v2.0.0 - Fixed game crashing bug; Forgot to remove test code as well as updated default value
	v1.0.3 - Integrated for the generator
	v1.0.2 - Broke up the battlebacks and allow recalculation by update(animation), and multi-line inputs
	v1.0.1 - Removed dead code that wasn't doing anything
	v1.0.0 - Add various built-in settings and plugin commands to change them
	v0.0.1 - Allows basic custom parameters via plugin parameters

===== v1.0.0 - Skill Cost Display =====
This plugin will display both MP and TP on a skill if both cost more than 0. In both the menu and battles, it will display the costs.

Core functionality that this plugin works with:
	* Window_SkillList.prototype.drawSkillCost

CHANGELOG
	v1.0.0 - Left some testing code in, oops
	v0.0.3 - Add display free option
	v0.0.2 - Add a way to include text next to cost to represent the type
	v0.0.1 - Added Quality of Life feature to include both TP and MP in menus options if the value is greater than zero

===== v1.0.0 - Skill Cost Formula =====
This plugin allows you to have dynamic skill costs (in MP and TP) using similar formulas like the damage formula.

Note tags for Skills:
	* TP Cost
		 <SirL.tpCost:FORMULA>
	TP cost is defined using a formula that is used in calculations. The FORMULA must be like the damage formula except for b(target) since that cannot be determined yet.

	* MP Cost
		 <SirL.mpCost:FORMULA>
	MP cost is defined using a formula that is used in calculations. The FORMULA must be like the damage formula except for b(target) since that cannot be determined yet.

	* Alt Cost
		 <SirL.ALTCost:FORMULA>
	Allows custom cost to be defined, replace ALT with the name you want the custom cost to be, such as SirL.goldCost, plugin parameters must have this defined. The FORMULA must be like the damage formula except for b(target) since that cannot be determined yet.

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.skillTpCost
	* Game_BattlerBase.prototype.skillMpCost
	* Game_BattlerBase.prototype.canPaySkillCost
	* Game_BattlerBase.prototype.paySkillCost

CHANGELOG
	v1.0.0 - Allow formulas for the cost for custom stats, such as HP
	v0.0.1 - The cost of both TP and MP can be defined with formulas in their note tags

===== v1.0.1 - Skill Cost Sorter =====
This plugin allows you to sort your skill cost based on any comparison list you define in the plugin parameters.

This plugin has some special Skill codes listed below:
	* skill.lastUsedTime = Compares the skills based on when they were last used in either the menu or battle per actor
	* skill.lastUsedBattleTime = Compares the skills based on which they were last used in battle per actor
	* skill.lastUsedMenuTime = Compares the skills based on when they were last used in the menu per actor
	* skill.usable = Compares skill usability in the current menu
	* skill.altType_NAME = must-have skill cost formula plugin, replace NAME with the name of the altType you want to sort on.
	
Some helpful example sorters as well:
	* skill.name = Sort skill names in alphabetical order
	* skill.damage.type = Sort by damage type simliar order to it in the database

Core functionality that this plugin works with:
	* Window_SkillList.prototype.makeItemList
	* Game_Actor.prototype.setLastBattleSkill
	* Game_Actor.prototype.setLastMenuSkill

CHANGELOG
	v1.0.1 - Return Item filter back to the code and added some helpful example sorters
	v1.0.0 - Forgot to give the list of sorts a default, and included altTypes if you have skill cost formula plugin
	v0.0.5 - Refactor the code to be cleaner for the generator
	v0.0.4 - Give each party individual time factors, so their most recent come up higher
	v0.0.3 - Created logic to determine if the skill is playable in the current menu
	v0.0.2 - More flexible replacement for the functions
	v0.0.1 - Rough code that just straight replaces the functions

===== v1.0.0 - Weapon Stats Restrictions =====
This plugin allows restriction on equipping weapons based on the stats of the actor or weapon.

Note tags for Weapons:
	* Less Than Stat Restriction
		 <SirL.lessThanSR:{'code1a':'code1b','code2a':'code2b'}>
	Compares the value a to value b, and will allow equiping if value a is less than value b.
	You can have multiple by indicating with a comma. Keys: a = actor and w = weapon

	* Greater Than Stat Restriction
		 <SirL.greaterThanSR:{'code1a':'code1b','code2a':'code2b'}>
	Compares the value a to value b, and will allow equiping if value a is greater than value b.
	You can have multiple by indicating with a comma. Keys: a = actor and w = weapon

Core functionality that this plugin works with:
	* Game_BattlerBase.prototype.canEquipWeapon

CHANGELOG
	v1.0.0 - Allow you define restrictions of greaterThan and lessThan properties

TERMS OF USE
	All required Terms of Use follow the higher the number the higher the priority, for example: 1. Can use X and then 2. Cannot use X, then you cannot use X

	Optional Terms of Use are terms that the creator would like to have, but is not forcing anyone to follow.

REQUIRED TERMS OF USE
	1. You are free to use the plugin created in any commercial or non-commercial projects with the RPG Maker software.
	2. You are free to modify the script created to your liking however, for any bug fixes or general features you are required to post an explanation in the Bugs/Features Requests forums on the generator page. This is so that the community can always be using the best code available.
	3. You are not allowed to modify the terms of use except for creating stricter terms.
	4. Place SirLegna Generated Plugins in your credits

OPTIONAL TERMS OF USE
	* Gifting SirLegna a copy of your game. I would love to see how you use my code for ideas on how to improve my plugins.


CREDITS
	 - SirLegna can be found at https://sirlegna.itch.io/ 
	Creator
	 - Kurochan can be found at https://kurochan.itch.io/
	Tester, code reviewer, and fellow idea generator.
	 - Rik Schennink can be found at https://rikschennink.github.io/fitty/
	Providing a text fitting javascript code for the generator.
	 - jerjer can be found at https://stackoverflow.com/a/9092085
	Creator of the getFnParamNames function
*/

/*~struct~accent:
@param AccentManager.accentName
@text Accent Name
@parent accent
@desc The text to indicate what accent it is
@type text

@param AccentManager.positionNum
@text Window Position
@parent accent
@desc The Message box location.
@type select
@option Don't Change
@value -1
@option Top
@value 0
@option Middle
@value 1
@option Bottom
@value 2

@param AccentManager.backgroundNum
@text Window Background
@parent accent
@desc The background you would like the window to have
@type select
@option Don't Change
@value -1
@option Window
@value 0
@option Dim
@value 1
@option Transparent
@value 2

@param AccentManager.faceFile
@text Faces
@parent accent
@desc The file name which contains the face for the message window
@type file
@dir img/faces/

@param AccentManager.faceId
@text Face Id
@parent accent
@desc The index is the face you want to take from, starting at 0 - top left and 7 - bottom right.
@type number
@max 7
@min 0

@param AccentManager.rules
@text Rules
@parent accent
@desc The rules will be applied when the accent is selected.
@default []
@type struct<rule>[]

*/
/*~struct~rule:
@param AccentManager.searchValue
@text Search Value
@parent rule
@desc The text it will search for to replace.
@default potion
@type text

@param AccentManager.newValue
@text New Value
@parent rule
@desc Replacement text to replace the old text
@default \C[1]potion\C[0]
@type text

*/
/*~struct~SirLMPTileEventLink:
@param TileEvent.tiles
@text List of Tiles
@parent SirLMPTileEventLink
@desc The list of tiles which are sensitive
@type struct<SirLMPTileEventTile>[]

@param TileEvent.buttonCalls
@text Button Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the action button is pressed, unless Button By or Button On is called.
@default []
@type common_event[]

@param TileEvent.buttonCallsOn
@text Button On Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the action button is pressed, ignores Button By and Button.
@default []
@type common_event[]

@param TileEvent.buttonCallsBy
@text Button By Calls
@parent SirLMPTileEventLink
@desc Button is pressed & player is in front of tile, common events are called, unless Button On and ignores Button
@default []
@type common_event[]

@param TileEvent.onCalls
@text Stand On Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the player is on it, unless Stand On Only or Stand By Only.
@default []
@type common_event[]

@param TileEvent.onOnlyCalls
@text Stand On Only Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the player is on it, ignoring all other Stand Calls
@default []
@type common_event[]

@param TileEvent.byCalls
@text Stand By Calls
@parent SirLMPTileEventLink
@desc The common events that are called when the player is in front of it, unless Stand On Only or Stand By Only.
@default []
@type common_event[]

@param TileEvent.byOnlyCalls
@text Stand By Only Calls
@parent SirLMPTileEventLink
@desc The common events called when player is in front of it, unless Stand On Only and ignores others Stand Calls.
@default []
@type common_event[]

*/
/*~struct~SirLMPTileEventTile:
@param TileEvent.mapId
@text Map Id
@parent SirLMPTileEventTile
@desc The Map Id without leading zeros
@type number
@min 1

@param TileEvent.tileX
@text X
@parent SirLMPTileEventTile
@desc The X position on the map for the tile you want
@type number
@min 0

@param TileEvent.tileY
@text Y
@parent SirLMPTileEventTile
@desc The Y position on the map for the tile you want
@type number
@min 0

*/
/*~struct~SirLBattleBack:
@param PositionBattleBacks.TypeOfAdjustment
@text Type of Adjustment
@parent SirLBattleBack
@desc Determines the way the battleback will be adjusted
@default Default
@type combo
@option Default
@option Screen Size
@option UI Size
@option Custom

@param PositionBattleBacks.CustomOptionsHeader
@text Custom Options:
@parent SirLBattleBack
@desc Only if the Type of Adjustment equals Custom will this option be used.

@param PositionBattleBacks.bbWidth
@text BattleBack Width
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the width of the batteback in pixels. You can use javascript as well.
@default Math.floor((1000 * Graphics.width) / 816)
@type multiline_string

@param PositionBattleBacks.bbHeight
@text BattleBack Height
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the height of the batteback in pixels. You can use javascript as well.
@default Math.floor((740 * Graphics.height) / 624)
@type multiline_string

@param PositionBattleBacks.bbXOff
@text BattleBack X Offset
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the X offset of the batteback in pixels. You can use javascript as well.
@default (Graphics.width - bb.width) / 2
@type multiline_string

@param PositionBattleBacks.bbYOff4SideView
@text BattleBack Y Offset in SideView mode
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the Y offset of the batteback in pixels only while inside view mode. You can use javascript as well.
@default Graphics.height - bb.height
@type multiline_string

@param PositionBattleBacks.bbYOff4FrontView
@text BattleBack Y Offset in FrontView mode
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the Y offset of the batteback in pixels only while in front view mode. You can use javascript as well.
@default 0
@type multiline_string

@param PositionBattleBacks.bbScale
@text BattleBack Scale
@parent PositionBattleBacks.CustomOptionsHeader
@desc Define the scale of the batteback in ratio. You can use javascript as well.
@default Math.max(ratioX, ratioY, 1.0)
@type multiline_string

*/
/*~struct~SkillCostDisplaySkillType:
@param SkillCostDisplay.Skill Type Name
@text Skill Type Name
@parent SkillCostDisplaySkillType
@desc Define the Skill Type Name
@default Hp
@type text

@param SkillCostDisplay.Skill Type Color
@text Skill Type Color
@parent SkillCostDisplaySkillType
@desc Define the Skill Type Color in hex code like #acf059
@default #e08040
@type text

*/
/*~struct~SirLMPSkillCostFormulaAltTypeDef:
@param SkillCostFormula.Alt Name
@text Alternative Skill Name
@parent SirLMPSkillCostFormulaAltTypeDef
@desc Define the Alternative Skill Name
@default Hp
@type text

@param SkillCostFormula.Alt Source
@text Alternative Skill Source
@parent SirLMPSkillCostFormulaAltTypeDef
@desc Define the Alternative Skill Source or where calculations will be taken from. You can use damage formula notation, like a for the actor.
@default a._hp
@type text

*/
/*~struct~SirLMPSkillCostSorterSorter:
@param SkillCostSorter.eval
@text Skill code
@parent SirLMPSkillCostSorterSorter
@desc Define the Skill code that will be sorted with. skill is the variable for the skill itself, for example, skill.mpCost
@default skill.mpCost
@type text

@param SkillCostSorter.order
@text Is Ascending
@parent SirLMPSkillCostSorterSorter
@desc What type of order do you want the skills to appears. Ascending means 1,2,3
@default true
@type boolean
@on Ascending Order
@off Descending Order

*/
var Imported = Imported || {};
Imported.sirL_MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34 = true;
var SirL = SirL || {};
SirL.MPCore = SirL.MPCore || {};
SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34 = SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34 || {};
SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName = "sirL_MP_All_Plugins";
SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP = PluginManager.parameters(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName);
SirL.MPAccentManager = SirL.MPAccentManager || {};
SirL.MPAccentManager.accents = JSON.parse(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["AccentManager.accents"]).map(accent => JSON.parse(accent));
SirL.MPAccentManager.globalRules = JSON.parse(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["AccentManager.generalRules"]).map(accent => JSON.parse(accent));
SirL.MPAccentManager.hideAfterChar = SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["AccentManager.hideAfterChar"];
SirL.MPAccentManager.names = SirL.MPAccentManager.accents.map(accent => accent["AccentManager.accentName"]);
SirL.MPChoiceLocation = SirL.MPChoiceLocation || {};
SirL.MPChoiceLocation.cWinX = 'return 0;';
SirL.MPChoiceLocation.cWinY = 'return 0;';
SirL.MPDelaySwitchVariables = SirL.MPDelaySwitchVariables || {};
SirL.MPArmorRequirementRevamp = SirL.MPArmorRequirementRevamp || {};
SirL.MPItemRequirementRevamp = SirL.MPItemRequirementRevamp || {};
SirL.MPWeaponRequirementRevamp = SirL.MPWeaponRequirementRevamp || {};
SirL.MPBetterScriptCommand = SirL.MPBetterScriptCommand || {};
SirL.MPTileBasedScaling = SirL.MPTileBasedScaling || {};
SirL.MPTileBasedScaling.preparedStorage = SirL.MPTileBasedScaling.preparedStorage || [];
SirL.MPEventCloner = SirL.MPEventCloner || {};
SirL.MPTileEvent = SirL.MPTileEvent || {};
SirL.MPEnemyEscapeRevamp = SirL.MPEnemyEscapeRevamp || {};
SirL.MPEnemyStatsFormula = SirL.MPEnemyStatsFormula || {};
SirL.MPItemCostFormula = SirL.MPItemCostFormula || {};
SirL.MPItemMorpher = SirL.MPItemMorpher || {};
SirL.MPPositionBattleBacks = SirL.MPPositionBattleBacks || {};
SirL.MPSkillCostDisplay = SirL.MPSkillCostDisplay || {};
SirL.MPSkillCostFormula = SirL.MPSkillCostFormula || {};
SirL.MPSkillCostSorter = SirL.MPSkillCostSorter || {};
SirL.MPWeaponStatsRestrictions = SirL.MPWeaponStatsRestrictions || {};
typeof SirL.savablePP != `undefined` ? SirL.savablePP = SirL.savablePP.concat(...[{"name":"secondDelays","code":"return {}"},{"name":"frameDelays","code":"return {}"},{"name":"battleDelays","code":"return {}"},{"name":"winDelays","code":"return {}"},{"name":"escapeDelays","code":"return {}"},{"name":"stepDelays","code":"return {}"},{"name":"saveDelays","code":"return {}"},{"name":"aBB","code":"return Boolean(JSON.parse(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP[\"PositionBattleBacks.animatedBattleBacks\"]))"},{"name":"layers","code":"return SirL.MPPositionBattleBacks.batteBackParser()"}]) : SirL.savablePP = [{"name":"secondDelays","code":"return {}"},{"name":"frameDelays","code":"return {}"},{"name":"battleDelays","code":"return {}"},{"name":"winDelays","code":"return {}"},{"name":"escapeDelays","code":"return {}"},{"name":"stepDelays","code":"return {}"},{"name":"saveDelays","code":"return {}"},{"name":"aBB","code":"return Boolean(JSON.parse(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP[\"PositionBattleBacks.animatedBattleBacks\"]))"},{"name":"layers","code":"return SirL.MPPositionBattleBacks.batteBackParser()"}];
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Choice Location.choiceLocation", args => {
	SirL.MPChoiceLocation.set(args.locX, args.locY);
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Choice Location.choiceLocationTemp", args => {
	SirL.MPChoiceLocation.resetFlag = true;
SirL.MPChoiceLocation.set(args.locX, args.locY);
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Choice Location.resetChoiceLocation", args => {
	SirL.MPChoiceLocation.reset();
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Delay Switches and Variables.setSelfSwitchDelay", args => {
	currents = [$gameSystem._battleCount,$gameSystem._winCount,$gameSystem._escapeCount,$gameSystem._saveCount,Graphics.frameCount, Graphics.frameCount/60,$gameParty._steps]
	completedValue = currents[args.DelayType] + parseInt(args.DelayAmount);
	containers = ['battleDelays', 'winDelays', 'escapeDelays','saveDelays','frameDelays','secondDelays','stepDelays']
	container = containers[args.DelayType]
	mapId = parseInt(args.mapId) || $gameMap._mapId
	eventId = parseInt(args.eventId) || $gameMap._interpreter._eventId
	state = Boolean(JSON.parse(args.Operation))
	command = "$gameSelfSwitches.setValue(["+mapId+","+eventId+",'"+args.sSLetter+"'],"+state+")"
	typeof $gameSystem._sirL.savablePP[container][completedValue] != 'undefined' ? $gameSystem._sirL.savablePP[container][completedValue].push(command) : $gameSystem._sirL.savablePP[container][completedValue] = [command]
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Delay Switches and Variables.setSwitchDelay", args => {
	currents = [$gameSystem._battleCount,$gameSystem._winCount,$gameSystem._escapeCount,$gameSystem._saveCount,Graphics.frameCount, Graphics.frameCount/60,$gameParty._steps]
	completedValue = currents[args.DelayType] + parseInt(args.DelayAmount);
	containers = ['battleDelays', 'winDelays', 'escapeDelays','saveDelays','frameDelays','secondDelays','stepDelays']
	container = containers[args.DelayType]
	state = Boolean(JSON.parse(args.Operation))
	command = "$gameSwitches.setValue("+args.switchId+","+state+")"
	typeof $gameSystem._sirL.savablePP[container][completedValue] != 'undefined' ? $gameSystem._sirL.savablePP[container][completedValue].push(command) : $gameSystem._sirL.savablePP[container][completedValue] = [command]
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Delay Switches and Variables.setVariableDelay", args => {
	currents = [$gameSystem._battleCount,$gameSystem._winCount,$gameSystem._escapeCount,$gameSystem._saveCount,Graphics.frameCount, Graphics.frameCount/60,$gameParty._steps]
	completedValue = currents[args.DelayType] + parseInt(args.DelayAmount);
	containers = ['battleDelays', 'winDelays', 'escapeDelays','saveDelays','frameDelays','secondDelays','stepDelays']
	container = containers[args.DelayType]
	value = new Function(args.Operand)(v = $gameVariables._data)
	command = "$gameVariables.setValue("+args.variableId+","+value+")"
	typeof $gameSystem._sirL.savablePP[container][completedValue] != 'undefined' ? $gameSystem._sirL.savablePP[container][completedValue].push(command) : $gameSystem._sirL.savablePP[container][completedValue] = [command]
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Better Script Command.ScriptCommand", args => {
	eval(args.script);
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Event Cloner.SpawnClonedEvent", args => {
	eventOverride = {}
	JSON.parse(args.overwriteData).forEach( data => {
		data = data.split(":");
		eventOverride[data[0].trim()] = data[1].trim();
	});
	SirL.MPEventCloner.getEventAtId(args.mapId, args.eventId, eventOverride)
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Position BattleBacks.SetAnimatedBattleBacks", args => {
	$gameSystem._sirL.savablePP.aBB = Boolean(JSON.parse(args.animatedBattleBacks));
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Position BattleBacks.Set2Default", args => {
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "Default";
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Position BattleBacks.Set2Screen", args => {
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "Screen Size";
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Position BattleBacks.Set2UI", args => {
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "UI Size";
});
PluginManager.registerCommand(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pluginName,"Position BattleBacks.Set2Custom", args => {
	layer = parseInt(args.layer) - 1;
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.TypeOfAdjustment"] = "Custom";
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbWidth"] = args.bbWidth; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbHeight"] = args.bbHeight; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbXOff"] = args.bbXOff; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbYOff4SV"] = args.bbYOff4SideView; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbYOff4FV"] = args.bbYOff4FrontView; //String
	$gameSystem._sirL.savablePP.layers[layer]["PositionBattleBacks.bbScale"] =args.bbScale; //String
});
SirL.MPChoiceLocation.reset = function() {
	SirL.MPChoiceLocation.customFlag = false;
	SirL.MPChoiceLocation.resetFlag = false;
}
SirL.MPChoiceLocation.set = function(X, Y) {
	SirL.MPChoiceLocation.customFlag = true;
	SirL.MPChoiceLocation.cWinX = X;
	SirL.MPChoiceLocation.cWinY = Y;
}
SirL.MPDelaySwitchVariables.checkDelays = function(current, delays){
	var times = Object.keys(delays)
	if (current >= Math.min(...times)){
		for(var timesId = 0; timesId < times.length; timesId++){
			if (times[timesId] <= current){
				commands = delays[times[timesId]]
				delete delays[times[timesId]]
				for( var commandId = 0; commandId < commands.length; commandId++){
					new Function(commands[commandId])()
				}
			}
		}
	}
}
SirL.MPArmorRequirementRevamp.isSkillAtypeOk = function(skill,actor){
	noArmor = true;
	noArmorList = skill.meta["SirL.No_Armor"] 
	if (typeof noArmorList != "undefined"){
		if (noArmorList == true){ noArmorList = []}
		for (equipId = 1; equipId < actor._equips.length; equipId++){
			hasNoEquipment = actor._equips[equipId]._itemId == 0;
			if(!noArmorList.includes(equipId + 1)){
				noArmor = noArmor && hasNoEquipment
			}
		}
	} //Else there is no requirement for no armor
	
	hasRequiredArmor= true;
	requiredArmors = skill.meta["SirL.Required_Armor"] || '{}'
	requiredArmors = JSON.parse(requiredArmors)
	for (requiredArmorId = 0; requiredArmorId < Object.keys(requiredArmors).length; requiredArmorId++){
		equipId = Object.keys(requiredArmors)[requiredArmorId] - 1
		armor = $dataArmors[actor._equips[equipId]._itemId] || {"atypeId":-1}
		hasRequiredArmor = hasRequiredArmor && requiredArmors[Object.keys(requiredArmors)[requiredArmorId]].includes(requiredArmors[Object.keys(requiredArmors)[requiredArmorId]].includes(x ).atypeId)
	}
	
	return noArmor && hasRequiredArmor
	
}
SirL.MPItemRequirementRevamp.meetsNoItemRequirement = function(skill){
	if(skill.meta["SirL.EmptyInventory"]){
		return !$gameParty.items().length
	}
	return true
}
SirL.MPItemRequirementRevamp.isSkillItemOk = function(skill){
	hasRequiredItems = true;
	requiredItems = skill.meta["SirL.Required_Item"] || '{}'
	requiredItems = JSON.parse(requiredItems)
	for (requiredItemsId = 0; requiredItemsId < Object.keys(requiredItems).length; requiredItemsId++){
		itemId = Object.keys(requiredItems)[requiredItemsId]
		if ( ! $gameParty._items.hasOwnProperty(itemId) || requiredItems[itemId] > $gameParty._items[itemId]){
			hasRequiredItems = false
		}
	}
	return SirL.MPItemRequirementRevamp.meetsNoItemRequirement(skill) && hasRequiredItems	
}
SirL.MPTileBasedScaling.refresh = function(){
	if(typeof SceneManager._scene.prepare == "function"){ //Does the scene require prepare step, then
		needParameters = SirL.MPCore.getFnParamNames(SceneManager._scene.prepare)
		SirL.MPTileBasedScaling.preparedStorage = []
		needParameters.forEach(parameter => SirL.MPTileBasedScaling.preparedStorage.push(SceneManager._scene["_"+parameter]))
	}
	prevFadeType = $gamePlayer.fadeType()
    $gamePlayer._fadeType = 0
	if(!SceneManager.isSceneChanging()){
		SceneManager.goto(eval(SceneManager._scene.constructor.name));
	}
	$gamePlayer._fadeType = prevFadeType
    $gamePlayer.center($gamePlayer.x,$gamePlayer.y)
}
SirL.MPTileBasedScaling.calculate = function(){
	minimumWidth = $dataSystem.advanced.uiAreaWidth/48
	minimumHeight = $dataSystem.advanced.uiAreaHeight/48
    maxWidthWindowTiles = window.innerWidth/48;
    maxHeightWindowTiles = window.innerHeight/48;
    windowRatio = maxWidthWindowTiles/maxHeightWindowTiles
	if(!$dataMap){
		$dataMap = {width:maxWidthWindowTiles}
	}
        if($dataMap.width <= maxWidthWindowTiles){
            resizeWidth = Math.max($dataMap.width,minimumWidth);
            resizeHeight = Math.max(parseInt(resizeWidth/windowRatio),minimumHeight);
        } else {
            resizeWidth = Math.max(parseInt(maxWidthWindowTiles),minimumWidth);
            resizeHeight = Math.max(Math.round(resizeWidth/windowRatio),minimumHeight);
        }
    widthToBoxRatio = Graphics.width/Graphics.boxWidth;
    heightToBoxRatio = Graphics.height/Graphics.boxHeight;
    Graphics.resize(48*resizeWidth,48*resizeHeight);
    Graphics.boxWidth = Graphics.width / widthToBoxRatio
    Graphics.boxHeight = Graphics.height / heightToBoxRatio
}
SirL.MPEventCloner.getMap = function(src){
	return new Promise(function(resolve,reject){
		const xhr = new XMLHttpRequest();
		const url = "data/" + src;
		xhr.open("GET", url);
		xhr.overrideMimeType("application/json");
		xhr.onerror = function (){
			reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
		}
		xhr.onload = function(){
			if (xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				xhr.onerror()
			}
		}
		xhr.send();
	});
}
SirL.MPEventCloner.getEventAtId = function(mapId,eventId,eventOverride={}){
	SirL_MPEventCloner_getMap(mapId).then(SirL.MPEventCloner.getNewEvent.bind(null,eventId,eventOverride,mapId))
}
SirL.MPEventCloner.getNewEvent = function(eventId,eventOverride,mapId,map){
	originalEvent = map.events[eventId]
	eventOverride["spawnedEventId"] = eventId
	eventOverride["spawnedMapId"] = mapId
	if(eventOverride.hasOwnProperty('_eventId')){
		originalEvent.id = eval(eventOverride._eventId.toString())
		$dataMap.events[eventOverride._eventId] = originalEvent
		originalEvent = new Game_Event($gameMap._mapId, eval(eventOverride._eventId.toString()))
	} else{
		originalEvent.id = $dataMap.events.length
		$dataMap.events.push(originalEvent)
		originalEvent = new Game_Event($gameMap._mapId,$dataMap.events.length-1)
	}
	overrideData = eventOverride
	for(let overrideEntryId = 0; overrideEntryId < Object.keys(overrideData).length;overrideEntryId++){
		originalEvent[Object.keys(overrideData)[overrideEntryId]] = eval(Object.values(overrideData)[overrideEntryId].toString())
	}
	$gameMap._events[originalEvent._eventId] = originalEvent
	prevFadeType = $gamePlayer.fadeType()
	$gamePlayer._fadeType = 0
	SceneManager.goto(Scene_Map);
	$gamePlayer._fadeType = prevFadeType
}
SirL.MPTileEvent.tileId = function(x, y, z,map) {
    const width = map.width;
    const height = map.height;
    return map.data[(z * height + y) * width + x] || 0;
}
SirL.MPTileEvent.layeredTiles = function(x, y,map) {
    const tiles = [];
    for (let i = 0; i < 4; i++) {
        tiles.push(SirL.MPTileEvent.tileId(x, y, 3 - i,map));
    }
	tiles.push($dataTilesets[map.tilesetId].name)
    return tiles;
}
SirL.MPTileEvent.getMap = function(src){
	return new Promise(function(resolve,reject){
		const xhr = new XMLHttpRequest();
		const url = "data/" + src;
		xhr.open("GET", url);
		xhr.overrideMimeType("application/json");
		xhr.onerror = function (){
			reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
		}
		xhr.onload = function(){
			if (xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText));
			} else {
				xhr.onerror()
			}
		}
		xhr.send();
	});
}
SirL.MPTileEvent.checkTileEvent = function(wasMoving){
	tiles = []
	loc = []
	x = $gamePlayer.x
	y = $gamePlayer.y
	loc.push([x,y])
	tiles.push($gameMap.allTiles(x,y).splice(-4).toString())
	switch($gamePlayer.direction()){
		case 8: //Up
			y = y-1
		break;
		case 4: //Left
			x = x-1
		break;
		case 2: //Down
			y = y+1
		break;
		case 6: //Right
			x = x+1
		break;
	};
	loc.push([x,y])
	tiles.push($gameMap.allTiles(x,y).splice(-4).toString())
	SirL.MPTileEvent.triggerEvent(wasMoving,tiles,loc)
}
SirL.MPTileEvent.triggerEvent = function(wasMoving,tiles,loc){
	name = $gameMap.tileset().name
	buttonPressed = Input.isTriggered("ok") 
	touch = TouchInput.isTriggered() && JSON.stringify(loc).includes(JSON.stringify([$gameMap.canvasToMapX(TouchInput._triggerX),$gameMap.canvasToMapY(TouchInput._triggerY)]))
	if (name in SirL.MPTileEvent.linkage && (wasMoving || buttonPressed || touch)){
		protentialTiles = SirL.MPTileEvent.linkage[$gameMap.tileset().name]
		if(tiles[0] in protentialTiles || tiles[1] in protentialTiles){ // on-top or by
			if(buttonPressed || touch){
				events = [];
				events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["ButtonOn"] : []);
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["ButtonBy"] : []);
				}
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["Button"] : []);
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["Button"] : []);
				}
				for(eventId = 0; eventId < events.length; eventId++){$gameTemp.reserveCommonEvent(events[eventId])}
				return
			} else {
				events = [];
				events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["OnOnly"] : []);
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["ByOnly"] : []);
				}
				if(!events.length){
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[0]) ? protentialTiles[tiles[0]]["On"] : []);
					events =  events.concat(protentialTiles.hasOwnProperty(tiles[1]) ? protentialTiles[tiles[1]]["By"] : []);
				}
				for(eventId = 0; eventId < events.length; eventId++){$gameTemp.reserveCommonEvent(events[eventId])}
				return
			}
		}
	}
}
SirL.MPEnemyEscapeRevamp.escapedMembers = function(troop){
	return troop.members().filter(member => SirL.MPEnemyEscapeRevamp.isEscaped(member));
}
SirL.MPEnemyEscapeRevamp.isEscaped = function(enemy){
	return enemy._escaped;
}
SirL.MPEnemyEscapeRevamp.makeDropItemsOnEscape = function(enemy) {
    const rate = enemy.dropItemRate();
	kinds = [,"Item","Weapon","Armor"]
	drops = SirL.MPCore.toList(enemy.enemy().meta["SirL.escapeDrops"])
    return drops.reduce((r, di) => {
		di.kind = kinds.indexOf(di.type)
        if (di.kind > 0 && Math.random() * di.probability < rate) {
            return r.concat(enemy.itemObject(di.kind, di.id));
        } else {
            return r;
        }
    }, []);
}
SirL.MPEnemyStatsFormula.evalParamFormula = function(enemy,formula){
	try {
		const e = enemy;
		const v = $gameVariables._data;
		const t = $gameTroop;
		const p = $gameParty;
		const value = Math.max(eval(formula),0)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
}
SirL.MPPositionBattleBacks.batteBackParser = function(){
	layers = []
	battleBacks = JSON.parse(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["PositionBattleBacks.battleBacks"])
	for(battleBackId = 0; battleBackId < battleBacks.length; battleBackId++){
		layers.push(JSON.parse(battleBacks[battleBackId]))
	}
	return layers
}
SirL.MPSkillCostDisplay.getShowSkillCostList = function(){
	retObj = []
	SkillCostList = SirL.MPCore.toList(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.skillTypes"])
	for (i = 0; i < SkillCostList.length; i++){
		retObj.push(JSON.parse(SkillCostList[i])["SkillCostDisplay.Skill Type Name"])
	}
	return retObj
}
SirL.MPSkillCostDisplay.getShowSkillCostColorList = function(i){
	return JSON.parse(SirL.MPCore.toList(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.skillTypes"])[i])["SkillCostDisplay.Skill Type Color"]
}
SirL.MPSkillCostDisplay.isShowMultiple = function(){
	return SirL.MPCore.toBoolean(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.multipleCosts"]);
}
SirL.MPSkillCostDisplay.showLabel = function(cost, type){
	if (typeof TextManager[type.toLowerCase] != "undefined"){
		type = TextManager[type.toLowerCase]()
	}
	switch(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.costLabel"]){
		case "right":
			return cost.toString() + " " +type;
			break;
		case "left":
			return type + " " + cost.toString();
			break;
		default:
			return cost.toString();
			break;
	};
}
SirL.MPSkillCostDisplay.getFreeObject = function(){
	if(SirL.MPCore.toBoolean(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.ShowFree"])){
		return [SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.FreeColor"],SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostDisplay.FreeTerm"]]
	}
	return []
}
SirL.MPSkillCostFormula.evalCostFormula = function(caster,formula){
	try {
		const a = caster;
		const v = $gameVariables._data;
		const value = Math.max(eval(formula),0)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
}
SirL.MPSkillCostFormula.skillAltCost = function(caster,type,skill){
	if (typeof skill.meta['SirL.'+type.toLowerCase()+'Cost'] == "undefined"){
		try{return caster["skill"+type+"Cost"](skill)} catch(err){return 0}
	} else{
		return SirL.MPSkillCostFormula.evalCostFormula(caster,skill.meta['SirL.'+type.toLowerCase()+'Cost']);
	}
}
SirL.MPSkillCostSorter.setUsedTime = function(skill,actor,window){
	if (skill["lastUsed"+window+"Time"] === undefined) { skill["lastUsed"+window+"Time"] = [] }
	skill["lastUsed"+window+"Time"][actor._actorId] = Date.now()
}
SirL.MPSkillCostSorter.getUsedTime = function(skill,actor,window){
			actorId = actor._actorId
			battleValue = SirL.MPSkillCostSorter.getUsedBattleTime(skill,actor)
			menuValue = SirL.MPSkillCostSorter.getUsedMenuTime(skill,actor)
			return (battleValue > menuValue) ? battleValue : menuValue;
}
SirL.MPSkillCostSorter.getUsedBattleTime = function(skill,actor){
	try{exists = skill["lastUsedBattleTime"][actor._actorId] === undefined} catch(err){exists = true}
	if (exists){
		return 0;
	} else {
		return skill["lastUsedBattleTime"][actor._actorId]
	}
}
SirL.MPSkillCostSorter.getUsedMenuTime = function(skill,actor){
	try{exists = skill["lastUsedMenuTime"][actor._actorId] === undefined} catch(err){exists = true}
	if (exists){
		return 0;
	} else {
		return skill["lastUsedMenuTime"][actor._actorId]
	}
}
SirL.MPWeaponStatsRestrictions.weaponStatRestriction = function(item,actor){
	retObj = true;
	if (typeof item.meta["SirL.lessThanSR"] != "undefined"){
		mins = JSON.parse(item.meta["SirL.lessThanSR"])
		for(minId = 0; minId < Object.keys(mins).length; minId++){
			value1 = Function(['a','w'],'return '+Object.keys(mins)[minId]+";");
			value2 = Function(['a','w'],'return '+mins[Object.keys(mins)[minId]]+";");
			if (value1(actor,item) > value2(actor,item)){ //Inverse check for false return
				return false;
			}
		}
	}
	if (typeof item.meta["SirL.greaterThanSR"] != "undefined"){
		maxs = JSON.parse(item.meta["SirL.greaterThanSR"])
		for(maxId = 0; maxId < Object.keys(maxs).length; maxId++){
			value1 = Function(['a','w'],'return '+Object.keys(maxs)[maxId]+";");
			value2 = Function(['a','w'],'return '+maxs[Object.keys(maxs)[maxId]]+";");
			if (value1(actor,item) < value2(actor,item)){ //Inverse check for false return
				return false;
			}
		}
	}
	return retObj;
}
async function SirL_MPEventCloner_getMap(mapId){
	mapFile = "Map%1.json".format((mapId).padZero(3))
	Map = await SirL.MPEventCloner.getMap(mapFile)
	return Map
}
async function SirL_MPEventCloner_popDataMapWSpawns(event,map){
	while (!$dataMap)
        await SirL.MPCore.threadedDelay(1000);
	$dataMap.events[event._eventId] = map.events[event.spawnedEventId]
	$dataMap.events[event._eventId].id = event._eventId
}
async function SirL_MPTileEvent_parameterParser(){
	parsedData = {}
	connections = JSON.parse(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["TileEvent.connections"])
	for(connectionId = 0; connectionId < connections.length; connectionId++){
		connection = JSON.parse(connections[connectionId])
		tiles = JSON.parse(connection["TileEvent.tiles"])
		buttonCalls = JSON.parse(connection["TileEvent.buttonCalls"])
		buttonOnCalls = JSON.parse(connection["TileEvent.buttonCallsOn"])
		buttonByCalls = JSON.parse(connection["TileEvent.buttonCallsBy"])
		byCalls = JSON.parse(connection["TileEvent.byCalls"])
		byOnlyCalls = JSON.parse(connection["TileEvent.byOnlyCalls"])
		onCalls = JSON.parse(connection["TileEvent.onCalls"])
		onOnlyCalls = JSON.parse(connection["TileEvent.onOnlyCalls"])
		for(tileId = 0; tileId < tiles.length; tileId++){
			tile = JSON.parse(tiles[tileId])
			tile = await SirL_MPTileEvent_getTileMap(parseInt(tile["TileEvent.mapId"]),parseInt(tile["TileEvent.tileX"]),parseInt(tile["TileEvent.tileY"]))
			tileSet = tile.pop()
			parsedData[tileSet] = parsedData[tileSet] || {}
			parsedData[tileSet][tile] = {}
			parsedData[tileSet][tile]["Button"]  = []
			parsedData[tileSet][tile]["ButtonOn"]  = []
			parsedData[tileSet][tile]["ButtonBy"]  = []
			parsedData[tileSet][tile]["By"]  = []
			parsedData[tileSet][tile]["ByOnly"]  = []
			parsedData[tileSet][tile]["On"]  = []
			parsedData[tileSet][tile]["OnOnly"]  = []
			for(buttonCallIds = 0; buttonCallIds < buttonCalls.length; buttonCallIds++){
				parsedData[tileSet][tile]["Button"].push(parseInt(buttonCalls[buttonCallIds]))
			}
			for(buttonOnCallIds = 0; buttonOnCallIds < buttonOnCalls.length; buttonOnCallIds++){
				parsedData[tileSet][tile]["ButtonOn"].push(parseInt(buttonOnCalls[buttonOnCallIds]))
			}
			for(buttonByCallIds = 0; buttonByCallIds < buttonByCalls.length; buttonByCallIds++){
				parsedData[tileSet][tile]["ButtonBy"].push(parseInt(buttonByCalls[buttonByCallIds]))
			}
			for(byCallIds = 0; byCallIds < byCalls.length; byCallIds++){
				parsedData[tileSet][tile]["By"].push(parseInt(byCalls[byCallIds]))
			}
			for(byOnlyCallIds = 0; byOnlyCallIds < byOnlyCalls.length; byOnlyCallIds++){
				parsedData[tileSet][tile]["ByOnly"].push(parseInt(byOnlyCalls[byOnlyCallIds]))
			}
			for(onCallIds = 0; onCallIds < onCalls.length; onCallIds++){
				parsedData[tileSet][tile]["On"].push(parseInt(onCalls[onCallIds]))
			}
			for(onOnlyCallIds = 0; onOnlyCallIds < onOnlyCalls.length; onOnlyCallIds++){
				parsedData[tileSet][tile]["OnOnly"].push(parseInt(onOnlyCalls[onOnlyCallIds]))
			}
		}
	}
	return parsedData
}
async function SirL_MPTileEvent_getTileMap(mapId, x, y){
	mapFile = "Map%1.json".format((mapId).padZero(3))
	Map = await SirL.MPTileEvent.getMap(mapFile)
	return SirL.MPTileEvent.layeredTiles(x,y,Map)
}
Game_Interpreter.prototype.command101 = function(params) {
    if ($gameMessage.isBusy()) {
        return false;
    }
	
	try{
		if(params[4].includes(SirL.MPAccentManager.hideAfterChar)){
			speaker = params[4].split(SirL.MPAccentManager.hideAfterChar)
			$gameMessage.setSpeakerName(speaker[0].trim())
			accentIndex = SirL.MPAccentManager.names.indexOf(speaker[1].trim())
		} else {
			$gameMessage.setSpeakerName(params[4]);
			accentIndex = SirL.MPAccentManager.names.indexOf(params[4].trim())
		}
	} catch (err) {
		$gameMessage.setSpeakerName(params[4]);
		accentIndex = -1
	}
	
	if(accentIndex >= 0){
		accent = SirL.MPAccentManager.accents[accentIndex]
		$gameMessage.setFaceImage(accent["AccentManager.faceFile"], accent["AccentManager.faceId"]);
		bg = parseInt(accent["AccentManager.backgroundNum"])
		if(bg >= 0){
			$gameMessage.setBackground(bg);
		} else {
			$gameMessage.setBackground(params[2]);
		}
		
		pos = parseInt(accent["AccentManager.positionNum"])
		if(pos >= 0){
			$gameMessage.setPositionType(pos);
		} else {
			$gameMessage.setPositionType(params[3]);
		}
		while (this.nextEventCode() === 401) {
			// Text data
			this._index++;
			text = this.currentCommand().parameters[0]
			allAccentRules = SirL.MPAccentManager.globalRules.concat(JSON.parse(accent["AccentManager.rules"]).map(rule => JSON.parse(rule)))
			for( var ruleId = 0; ruleId < allAccentRules.length; ruleId++){
				rule = new RegExp(allAccentRules[ruleId]["AccentManager.searchValue"],'g')
				text = text.replace(rule,allAccentRules[ruleId]["AccentManager.newValue"]);
			}
			$gameMessage.add(text);
		}
	} else {
		$gameMessage.setFaceImage(params[0], params[1]);
		$gameMessage.setBackground(params[2]);
		$gameMessage.setPositionType(params[3]);
		while (this.nextEventCode() === 401) {
			// Text data
			this._index++;
			text = this.currentCommand().parameters[0]
			try {
				for( var ruleId = 0; ruleId < SirL.MPAccentManager.globalRules.length; ruleId++){
					rule = new RegExp(SirL.MPAccentManager.globalRules[ruleId]["AccentManager.searchValue"],'g')
					text = text.replace(rule,SirL.MPAccentManager.globalRules[ruleId]["AccentManager.newValue"]);
				}
			} catch (err) {}
			$gameMessage.add(text);
		}
	}    
    switch (this.nextEventCode()) {
        case 102: // Show Choices
            this._index++;
            this.setupChoices(this.currentCommand().parameters);
            break;
        case 103: // Input Number
            this._index++;
            this.setupNumInput(this.currentCommand().parameters);
            break;
        case 104: // Select Item
            this._index++;
            this.setupItemChoice(this.currentCommand().parameters);
            break;
		case 357: // Plugin Command
            this._index++; //Go to next line (plugin command)
			params = this.currentCommand().parameters
			PluginManager.callCommand(this, params[0], params[1], params[3]);
			
			nextIndex = this._index + 1
			while (this._list[nextIndex].code === 657) {
			  nextIndex++
			}
			this._index = nextIndex;
			if (this.currentCommand().code === 102){
				this.setupChoices(this.currentCommand().parameters);
			}
            break;
    }
    this.setWaitMode("message");
    return true;
};
Window_ChoiceList.prototype.windowX = function() {
	try{customLoc = SirL.MPChoiceLocation.customFlag} catch (err){customLoc = false};
	if(customLoc){
		return new Function(SirL.MPChoiceLocation.cWinX)(this)
	}
    const positionType = $gameMessage.choicePositionType();
    if (positionType === 1) {
        return (Graphics.boxWidth - this.windowWidth()) / 2;
    } else if (positionType === 2) {
        return Graphics.boxWidth - this.windowWidth();
    } else {
        return 0;
    }
};
Window_ChoiceList.prototype.windowY = function() {
	try{customLoc = SirL.MPChoiceLocation.customFlag} catch (err){customLoc = false};
	if(customLoc){
		if (SirL.MPChoiceLocation.resetFlag){SirL.MPChoiceLocation.reset()}
		return new Function(SirL.MPChoiceLocation.cWinX)(this)
	}
    const messageY = this._messageWindow.y;
    if (messageY >= Graphics.boxHeight / 2) {
        return messageY - this.windowHeight();
    } else {
        return messageY + this._messageWindow.height;
    }
};
Game_System.prototype.initialize =  function() {
	//Doesn't hurt but specifically for TileBasedScaling
	document.body.style.overflow = "hidden"
	window.addEventListener("resize",Graphics._onWindowResize)
	this._sirL = this._sirL || {}
	try{
		parsedParameters = SirL_MPTileEvent_parameterParser()
		parsedParameters.then(function(result){
			SirL.MPTileEvent.linkage = result;
		});
	} catch (err) {}
	try{
		sPPs = SirL.savablePP;
		this._sirL.savablePP = this._sirL.savablePP || {}
	} catch (err) { sPPs = []}
	for(sPPId = 0; sPPId < sPPs.length; sPPId++){
		sP = sPPs[sPPId]
		this._sirL.savablePP[sP.name] = new Function(sP.code)(this);
	}
	
	this._saveEnabled = true;
    this._menuEnabled = true;
    this._encounterEnabled = true;
    this._formationEnabled = true;
    this._battleCount = 0;
    this._winCount = 0;
    this._escapeCount = 0;
    this._saveCount = 0;
    this._versionId = 0;
    this._savefileId = 0;
    this._framesOnSave = 0;
    this._bgmOnSave = null;
    this._bgsOnSave = null;
    this._windowTone = null;
    this._battleBgm = null;
    this._victoryMe = null;
    this._defeatMe = null;
    this._savedBgm = null;
    this._walkingBgm = null;
};
Game_System.prototype.onBattleStart = function() {
    this._battleCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._battleCount, $gameSystem._sirL.savablePP['battleDelays'])
	} catch(err){}
};
Game_System.prototype.onBattleWin = function() {
    this._winCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._winCount, $gameSystem._sirL.savablePP['winDelays'])
	} catch(err){}
};
Game_System.prototype.onBattleEscape = function() {
    this._escapeCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._escapeCount, $gameSystem._sirL.savablePP['escapeDelays'])
	} catch(err){}
};
Game_System.prototype.onBeforeSave = function() {
    this._saveCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._saveCount, $gameSystem._sirL.savablePP['saveDelays'])
	} catch(err){}
    this._versionId = $dataSystem.versionId;
    this._framesOnSave = Graphics.frameCount;
    this._bgmOnSave = AudioManager.saveBgm();
    this._bgsOnSave = AudioManager.saveBgs();
};
SceneManager.updateFrameCount = function() {
    Graphics.frameCount++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(Graphics.frameCount, $gameSystem._sirL.savablePP['frameDelays'])
		SirL.MPDelaySwitchVariables.checkDelays(Graphics.frameCount/60, $gameSystem._sirL.savablePP['secondDelays'])
	} catch(err){}
};
Game_Party.prototype.increaseSteps = function() {
    this._steps++;
	try{
		SirL.MPDelaySwitchVariables.checkDelays(this._steps, $gameSystem._sirL.savablePP['stepDelays'])
	} catch(err){}
};
Graphics._onWindowResize = function() {
	initialWidth = Graphics.width
	initialHeight = Graphics.height
	SirL.MPTileBasedScaling.calculate()
	if(initialWidth != Graphics.width || initialHeight != Graphics.height){
		SirL.MPTileBasedScaling.refresh()
	}
    Graphics._updateAllElements();	
};
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
	try{
		AtypeOk = SirL.MPArmorRequirementRevamp.isSkillAtypeOk(skill,this)
	} catch(err){AtypeOk = true}
	try{
		itemOk = SirL.MPItemRequirementRevamp.isSkillItemOk(skill)
	} catch(err){itemOk = true}
    return (
		itemOk &&
		AtypeOk &&
        this.meetsUsableItemConditions(skill) &&
        this.isSkillWtypeOk(skill) &&
        this.canPaySkillCost(skill) &&
        !this.isSkillSealed(skill.id) &&
        !this.isSkillTypeSealed(skill.stypeId)
    );
};
Game_Actor.prototype.isSkillWtypeOk = function(skill) {
	requiredWeapons = [skill.requiredWtypeId1,skill.requiredWtypeId2]
	try{noWeapon = skill.meta["SirL.No_Weapon"]} catch(err){noWeapon = false;}
	if(typeof noWeapon == "undefined"){noWeapon = false};
	try{
		x = SirL.MPCore.toList(skill.meta["SirL.Required_Weapon"])
		requiredWeapons = requiredWeapons.concat(x)
	} catch (err) {}
	if((this.weapons().length == 0 && noWeapon) ||
	(!noWeapon && !requiredWeapons.reduce(function(t,n){return t+n}))){
		return true;
	} else {
		for(requiredWeaponId = 0; requiredWeaponId < requiredWeapons.length; requiredWeaponId++){
			if(this.isWtypeEquipped(requiredWeapons[requiredWeaponId])){
				return true;
			}
		}
		return false;
	}
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
SceneManager.changeScene = function() {
    if (this.isSceneChanging() && !this.isCurrentSceneBusy()) {
        if (this._scene) {
            this._scene.terminate();
            this.onSceneTerminate();
        }
        this._scene = this._nextScene;
        this._nextScene = null;
        if (this._scene) {
			if(typeof SceneManager._scene.prepare == "function" && SirL.MPTileBasedScaling.preparedStorage.length){
				//There is temp storage that needs to be prepared
				this._scene.prepare(...SirL.MPTileBasedScaling.preparedStorage)
				SirL.MPTileBasedScaling.preparedStorage = []
			}
            this._scene.create();
            this.onSceneCreate();
        }
        if (this._exiting) {
            this.terminate();
        }
    }
};
SceneManager.updateScene = function() {
    if (this._scene) {
        if (this._scene.isStarted()) {
            if (this.isGameActive()) {
                this._scene.update();
            }
        } else if (this._scene.isReady()) {
            this.onBeforeSceneStart();
            this._scene.start();
            this.onSceneStart();
			Graphics._onWindowResize()
        }
    }
};
SirL.MPCore.getFnParamNames = function(fn){
	//Thanks to https://stackoverflow.com/a/9092085
    var fstr = fn.toString();
    return fstr.match(/\(.*?\)/)[0].replace(/[()]/gi,'').replace(/\s/gi,'').split(',');
};
Scene_Map.prototype.fadeOutForTransfer = function() {
    const fadeType = $gamePlayer.fadeType();
    switch (fadeType) {
        case 0: break;
        case 1:
            this.startFadeOut(this.fadeSpeed(), fadeType === 1);
            break;
    }
};
DataManager.loadMapData = function(mapId) {
    if (mapId > 0) {
        const filename = "Map%1.json".format(mapId.padZero(3));
        this.loadDataFile("$dataMap", filename);
    } else {
        this.makeEmptyMap();
    }
	for(let mapEventId = 0; mapEventId < $gameMap.events().length; mapEventId++){
		mapEvent = $gameMap.events()[mapEventId];
		if(mapEvent["spawnedEventId"]){
			SirL_MPEventCloner_getMap(mapEvent["spawnedMapId"]).then(SirL_MPEventCloner_popDataMapWSpawns.bind(null,mapEvent))
		}
	}
};
SirL.MPCore.threadedDelay = function (timer){
    return new Promise(resolve => {
        timer = timer || 2000;
        setTimeout(function () {
            resolve();
        }, timer);
    });
};
Game_Player.prototype.updateNonmoving = function(wasMoving, sceneActive) {
    if (!$gameMap.isEventRunning()) {
        if (wasMoving) {
            $gameParty.onPlayerWalk();
            this.checkEventTriggerHere([1, 2]);
            if ($gameMap.setupStartingEvent()) {
                return;
            }
        }
        if (sceneActive && this.triggerAction()) {
            return;
        }
        if (wasMoving) {
            this.updateEncounterCount();
        } else {
            $gameTemp.clearDestination();
        }
		if (sceneActive){
			try{SirL.MPTileEvent.checkTileEvent(wasMoving)} catch(err){}
		}
    }
};
BattleManager.makeEscapeRatio = function() {
    this._escapeRatio = (0.5 * $gameParty.agility()) / $gameTroop.agility();
	this._troopEscapeRatio = (0.5 * $gameTroop.agility()) / $gameParty.agility();
};
Game_Battler.prototype.escape = function() {		
	initialDisplay = [function(battler){}, function(battler){BattleManager._logWindow.push("addText",TextManager.escapeStart.format(battler.name()))}, function(battler){$gameMessage.add(TextManager.escapeStart.format(battler.name()))}]
	initialDisplay[SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["EnemyEscapeRevamp.deem"] || 0](this)
	const success =Math.random() < BattleManager._troopEscapeRatio;
	if (success) {
		this.hide();
		this._escaped = true;
		this.clearActions();
		this.clearStates();
		SoundManager.playEscape();
	} else {
		failureDisplay = [function(){}, function(){BattleManager._logWindow.push("wait"); BattleManager._logWindow.push("addText",TextManager.escapeFailure);}, function(){$gameMessage.add("\\\." + TextManager.escapeFailure)}]
		failureDisplay[SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["EnemyEscapeRevamp.deem"] || 0]()
		BattleManager._troopEscapeRatio += 0.1;
	}
};
Game_BattlerBase.prototype.initMembers = function() {
    this._hp = 1;
    this._mp = 0;
    this._tp = 0;
    this._hidden = false;
	this._escaped = false;
    this.clearParamPlus();
    this.clearStates();
    this.clearBuffs();
};
Game_Troop.prototype.expTotal = function() {
	retObj = 0;
	retObj += this.deadMembers().reduce((r, enemy) => r + enemy.exp(), 0);
	retObj += SirL.MPEnemyEscapeRevamp.escapedMembers(this).reduce(function(r,enemy){
		if(enemy.enemy().meta["SirL.escapeExp"]){
			r += parseInt(enemy.enemy().meta["SirL.escapeExp"])
		}
		return r;
	},0);
	return retObj;
};
Game_Troop.prototype.goldTotal = function() {
	const rate = this.goldRate()
	retObj = 0;
	retObj += this.deadMembers().reduce((r, enemy) => r + enemy.gold(), 0) * rate;
	retObj += SirL.MPEnemyEscapeRevamp.escapedMembers(this).reduce(function(r,enemy){
		if(enemy.enemy().meta["SirL.escapeGold"]){
			r += parseInt(enemy.enemy().meta["SirL.escapeGold"])
		}
		return r;
	},0) * rate;
    return retObj;
};
Game_Troop.prototype.makeDropItems = function() {
    retObj = [];
	retObj = retObj.concat(this.deadMembers().reduce((r, enemy) => r.concat(enemy.makeDropItems()), []));
	retObj = retObj.concat(SirL.MPEnemyEscapeRevamp.escapedMembers(this).reduce(function(r,enemy){
		escapedDropItems = []
		if(enemy.enemy().meta["SirL.escapeDrops"]){
			escapedDropItems = SirL.MPEnemyEscapeRevamp.makeDropItemsOnEscape(enemy)
		}
		return r.concat(escapedDropItems);
	},[]));
    return retObj;
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Game_Enemy.prototype.paramBase = function(paramId) {
    params = ["mhp","mmp","atk","def","mat","mdf","agi","luk"]
	formula = this.enemy().meta["SirL."+params[paramId]]
	if(typeof formula != "undefined"){
		return SirL.MPEnemyStatsFormula.evalParamFormula(this,formula);
	} else {
		return this.enemy().params[paramId];
	}
};
Game_Enemy.prototype.exp = function() {
    formula = this.enemy().meta["SirL.exp"]
	if(typeof formula != "undefined"){
		return SirL.MPEnemyStatsFormula.evalParamFormula(this,formula);
	} else {
		return this.enemy().exp;
	}
};
Game_Enemy.prototype.gold = function() {
    formula = this.enemy().meta["SirL.gold"]
	if(typeof formula != "undefined"){
		return SirL.MPEnemyStatsFormula.evalParamFormula(this,formula);
	} else {
		return this.enemy().gold;
	}
};
Window_ShopBuy.prototype.makeItemList = function() {
	this._data = [];
	this._price = [];
	for (const goods of this._shopGoods) {
		const item = this.goodsToItem(goods);
		if (item) {
			defaultPrice = 0;
			try {
				if (typeof item.meta["SirL.setItemPrice"] != "undefined"){
					defaultPrice = SirL.MPCore.evalDFLikeFormulas({i:item,p:$gameParty,v:$gameVariables._data}, item.meta["SirL.setItemPrice"])
				}
			} catch (err) {}
			defaultPrice = defaultPrice || item.price
			this._data.push(item);
			this._price.push(goods[2] === 0 ? defaultPrice : goods[3]);
		}
	}
};
Scene_Shop.prototype.sellingPrice = function() {
	defaultPrice = 0;
	try {
		if (typeof this._item.meta["SirL.setItemSellValue"] != "undefined"){
			defaultPrice = SirL.MPCore.evalDFLikeFormulas({i:this._item,p:$gameParty,v:$gameVariables._data,buyPrice:SirL.MPCore.evalDFLikeFormulas({i:this._item,p:$gameParty,v:$gameVariables._data},this._item.meta["SirL.setItemPrice"])}, this._item.meta["SirL.setItemSellValue"])
		}
	} catch (err) {}
	defaultPrice = defaultPrice || this._item.price / 2
    return Math.floor(defaultPrice);
};
SirL.MPCore.evalDFLikeFormulas = function ({i,p,v,buyPrice}={},formula){
	try{
		const value = Math.max(eval(formula),0)
		return isNaN(value) ? 0 : value;
	} catch (e) {
		return 0
	}
};
Game_Party.prototype.consumeItem = function(item) {
    if (DataManager.isItem(item) && item.consumable) {
		if (typeof item.meta["SirL.morphItem"] != "undefined"){
			nextId = item.meta["SirL.morphItem"];
			this.gainItem($dataItems[nextId], 1);
		}
        this.loseItem(item, 1);
    }
};
Sprite_Battleback.prototype.adjustPosition = function(layer) {
	layerSettings = $gameSystem._sirL.savablePP.layers[layer]
	switch(layerSettings["PositionBattleBacks.TypeOfAdjustment"]){
		case "Default":
			width = Function('bb','return Math.floor((1000 * Graphics.width) / 816)');
			height = Function('bb','return Math.floor((740 * Graphics.height) / 624)');
			xOff = Function('bb','return (Graphics.width - bb.width) / 2');
			yOffSV = Function('bb','return Graphics.height - bb.height');
			yOffFV = Function('bb','return 0');
			sirL_Scale = Function('bb','ratioX','ratioY','return Math.max(ratioX, ratioY, 1.0)');
		break;
		case "Screen Size":
			width = Function('bb','return Graphics.width');
			height = Function('bb','return Graphics.height');
			xOff = Function('bb','return (Graphics.width - bb.width) / 2');
			yOffSV = Function('bb','return Graphics.height - bb.height');
			yOffFV = Function('bb','return 0');
			sirL_Scale = Function('bb','ratioX','ratioY','return Math.max(ratioX, ratioY, 1.0)');
		break;
		case "UI Size":
			width = Function('bb','return Graphics.boxWidth');
			height = Function('bb','return Graphics.boxHeight');
			xOff = Function('bb','return (Graphics.width - bb.width) / 2');
			yOffSV = Function('bb','return Graphics.height - bb.height');
			yOffFV = Function('bb','return (Graphics.height - bb.height) / 2');
			sirL_Scale = Function('bb','ratioX','ratioY','return Math.max(ratioX, ratioY, 1.0)');
		break;
		case "Custom":
			width = Function('bb','return '+layerSettings["PositionBattleBacks.bbWidth"]+'');
			height = Function('bb','return '+layerSettings["PositionBattleBacks.bbHeight"]+'');
			xOff = Function('bb','return '+layerSettings["PositionBattleBacks.bbXOff"]+'');
			yOffSV = Function('bb','return '+layerSettings["PositionBattleBacks.bbYOff4SideView"]+'');
			yOffFV = Function('bb','return '+layerSettings["PositionBattleBacks.bbYOff4FrontView"]+'');
			sirL_Scale = Function('bb','ratioX','ratioY','return '+layerSettings["PositionBattleBacks.bbScale"]+'');
		break;
	};
	this.width = width(this);
	this.height = height(this);
	this.x = xOff(this);
	 if ($gameSystem.isSideView()) { //Offset Y
        this.y = yOffSV(this);
    } else {
        this.y = yOffFV(this);
    }
	const ratioX = this.width / this.bitmap.width;
    const ratioY = this.height / this.bitmap.height;
	const scale = sirL_Scale(this,ratioX,ratioY); //Scale of image
	this.scale.x = scale;
    this.scale.y = scale;
};
Spriteset_Battle.prototype.updateBattleback = function() {
    if (!this._battlebackLocated || $gameSystem._sirL.savablePP.aBB) {
        this._back1Sprite.adjustPosition(0);
        this._back2Sprite.adjustPosition(1);
        this._battlebackLocated = true;
    }
};
Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
	defaultSkillTypes = ["Tp","Mp"]
	try{skillsToShow =  SirL.MPSkillCostDisplay.getShowSkillCostList()} catch(err){skillsToShow = defaultSkillTypes}
	try{showMultiple = SirL.MPSkillCostDisplay.isShowMultiple()} catch(err){showMultiple = false}
	offSet = 0
	free = true
	for (i = 0; i < skillsToShow.length; i++){
		type = skillsToShow[i]
		try{cost =  SirL.MPSkillCostFormula.skillAltCost(this._actor,type,skill);
		if(typeof cost == "undefined"){cost =  this._actor["skill"+type+"Cost"](skill)}}
		catch(err){
			if (defaultSkillTypes.includes(type)){
				cost = this._actor["skill"+type+"Cost"](skill)
			} else { cost = 0 }
		}
		if(cost > 0){
			free = false
			try{skillColor = SirL.MPSkillCostDisplay.getShowSkillCostColorList(i)}catch(err){skillColor = ColorManager[type.toLowerCase()+"CostColor"]()};
			this.changeTextColor(skillColor);
			try{renderText = SirL.MPSkillCostDisplay.showLabel(cost,type)} catch(err){renderText = cost}
			if(x-offSet > 0){renderText = " "+renderText}
			this.drawText(renderText, x-offSet, y, width, "right");
			offSet += this.textWidth(renderText);
			if (!showMultiple){
				break;
			}
		}
	}
	if(free){
		try{freeObj = SirL.MPSkillCostDisplay.getFreeObject()} catch(err){freeObj = []}
		if(freeObj.length){
			this.changeTextColor(freeObj[0]);
			this.drawText(freeObj[1], x-offSet, y, width, "right");
		}
	}
};
Game_BattlerBase.prototype.skillTpCost = function(skill){
	try{retObj = SirL.MPSkillCostFormula.evalCostFormula(this,skill.meta['SirL.tpCost']) || skill.tpCost} catch(err){retObj = skill.tpCost};
	return retObj;
};
Game_BattlerBase.prototype.skillMpCost = function(skill){
	try{retObj = SirL.MPSkillCostFormula.evalCostFormula(this,skill.meta['SirL.mpCost']) || Math.floor(skill.mpCost * this.mcr)} catch(err){retObj = Math.floor(skill.mpCost * this.mcr)};
	return retObj;
};
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
	altSkill_canPaySkillCost = true;
	try{altSkills = SirL.MPCore.toList(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostFormula.Alt Types"])} catch(err){altSkills = []};
	for (i = 0; i < altSkills.length; i++){
		altSkill = JSON.parse(altSkills[i])
		altSource = SirL.MPSkillCostFormula.evalCostFormula(this,altSkill["SkillCostFormula.Alt Source"])
		if(altSource < SirL.MPSkillCostFormula.skillAltCost(this, altSkill["SkillCostFormula.Alt Name"],skill)){
			altSkill_canPaySkillCost = false;
		}
	}
		
    return (
        this._tp >= this.skillTpCost(skill) &&
        this._mp >= this.skillMpCost(skill) &&
		altSkill_canPaySkillCost
    );
};
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    this._mp -= this.skillMpCost(skill);
    this._tp -= this.skillTpCost(skill);
	const a = this;
	const v = $gameVariables._data;
	try{altSkills = SirL.MPCore.toList(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostFormula.Alt Types"]) || skill.tpCost} catch(err){altSkills = []};
	for (i = 0; i < altSkills.length; i++){
		altSkill = JSON.parse(altSkills[i])
		eval(altSkill["SkillCostFormula.Alt Source"] + " -= " + SirL.MPSkillCostFormula.skillAltCost(this, altSkill["SkillCostFormula.Alt Name"],skill).toString());
	}
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Window_SkillList.prototype.makeItemList = function() {
	actor = this._actor
	if (actor) {
		this._data = this._actor.skills().filter(item => this.includes(item));
		try{Sorts = SirL.MPCore.toList(SirL.MP34$8_68$7_68_e_35_f$34$g_34$5_34_k$34$l$34_i$3e$9$3g_j_34_d$34_h$35$c_34$a$6a$1_34_2_34_3$35_b$34.pP["SkillCostSorter.Sorts"])} catch(err){return;};
		this._data.sort(function(a,b){
			for (var sortId= 0; sortId < Sorts.length; sortId++){
				sorter = JSON.parse(Sorts[sortId])
				switch(sorter["SkillCostSorter.eval"]){
					case "skill.lastUsedTime":
						aValue = -SirL.MPSkillCostSorter.getUsedTime(a,actor,"Both")
						bValue = -SirL.MPSkillCostSorter.getUsedTime(b,actor,"Both")
					break;
					case "skill.lastUsedBattleTime":
						aValue = -SirL.MPSkillCostSorter.getUsedBattleTime(a,actor)
						bValue = -SirL.MPSkillCostSorter.getUsedBattleTime(b,actor)
					break;
					case "skill.lastUsedMenuTime":
						aValue = -SirL.MPSkillCostSorter.getUsedMenuTime(a,actor)
						bValue = -SirL.MPSkillCostSorter.getUsedMenuTime(b,actor)
					break;
					case "skill.usable":
						aValue = actor.meetsSkillConditions(a)
						bValue = actor.meetsSkillConditions(b)
					break;
					default:
						try{isSkillAltFormula = sorter["SkillCostSorter.eval"].includes("skill.altType_")} catch(err){isSkillAltFormula = false}
						if (isSkillAltFormula){
							altType = sorter["SkillCostSorter.eval"].split("_").splice(1).join('_')
							try{aValue = SirL.MPSkillCostFormula.skillAltCost(actor,altType,a)} catch(err){aValue = 0}
							try{bValue = SirL.MPSkillCostFormula.skillAltCost(actor,altType,b)} catch(err){bValue = 0}
						} else {
							aValue = eval(sorter["SkillCostSorter.eval"].replace(/skill/g,"a"))
							bValue = eval(sorter["SkillCostSorter.eval"].replace(/skill/g,"b"))
						}
				}
				aValue = aValue || Number.MAX_SAFE_INTEGER
				bValue = bValue || Number.MAX_SAFE_INTEGER
				if (aValue > bValue) return (SirL.MPCore.toBoolean(sorter["SkillCostSorter.order"])) ? 1 : -1;
				if (aValue < bValue) return (SirL.MPCore.toBoolean(sorter["SkillCostSorter.order"])) ? -1 : 1;
			}
		});
    } else {
        this._data = [];
    }
};
Game_Actor.prototype.setLastBattleSkill = function(skill) {
	try{SirL.MPSkillCostSorter.setUsedTime(skill,this,"Battle")}catch(err){};
	this._lastBattleSkill.setObject(skill);
};
Game_Actor.prototype.setLastMenuSkill = function(skill) {
	try{SirL.MPSkillCostSorter.setUsedTime(skill,this,"Menu")}catch(err){};
	this._lastMenuSkill.setObject(skill);
};
SirL.MPCore.toBoolean = function(string){
	return Boolean(JSON.parse(string))
};
SirL.MPCore.toList = function(string){
	return JSON.parse(string)
};
Game_BattlerBase.prototype.canEquipWeapon = function(item) {
	try{
		sr = SirL.MPWeaponStatsRestrictions.weaponStatRestriction(item,this);
	} catch {sr = true;}
    return (
		sr &&
        this.isEquipWtypeOk(item.wtypeId) &&
        !this.isEquipTypeSealed(item.etypeId)
    );
};
