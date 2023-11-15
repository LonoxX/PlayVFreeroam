const handlingOptions: { key: string; min: number; max: number; step: number; hint: string; type: string }[] = [
  {
    key: 'handlingNameHash',
    min: 0,
    max: 0,
    step: 1,
    hint: 'This is used by the vehicles.meta file to identify the handling line of the vehicle.',
    type: 'readonly',
  },
  { type: 'divider', hint: 'Phsical', key: '_', min: 0, max: 0, step: 0 },
  {
    key: 'centreOfMassOffset',
    min: -1,
    max: 1,
    step: 0.01,
    hint: 'This value shifts the center of gravity in meters from side to side (when in vehicle looking forward).',
    type: 'vector3',
  },
  //TODO VALUES
  {
    key: 'downforceModifier',
    min: 0.01,
    max: 100,
    step: 0.01,
    hint: 'Sets the amount of downforce applied to the vehicle. Increase this value to increase the grip at high speed.',
    type: 'number',
  },
  {
    key: 'inertiaMultiplier',
    min: 0.01,
    max: 4,
    step: 0.01,
    hint: 'This value is resistance to rotation around each axis. Therefore, the x axis affects how quickly the car shifts forward and back under braking and acceleration and how it rotates end over end in the air, the y axis affects how quickly the car shifts from side to side when cornering (or in the air) and the z axis affects how the car rotates around the middle, which manifests in normal driving as how quickly the vehicle appears to react to steering inputs. Recommend keeping the z value above 2.0 unless you want arcade style immediate reaction to steering inputs',
    type: 'vector3',
  },
  {
    key: 'initialDragCoeff',
    min: 10,
    max: 240,
    step: 1,
    hint: 'Sets the drag coefficient on the rage physics archetype of the vehicle (proportional to velocity squared). Increase to simulate aerodynamic drag. This affects the maximum speed of the vehicle. Max 120 Greater value will lower the maximum speed.',
    type: 'number',
  },
  {
    key: 'mass',
    min: 50,
    max: 10000,
    step: 50,
    hint: 'This is the weight of the vehicle in kilograms. Only used when the vehicle collides with another vehicle or non-static object.',
    type: 'number',
  },
  {
    key: 'percentSubmerged',
    min: 0,
    max: 100,
    step: 1,
    hint: 'A percentage of vehicle height in the water before vehicle floats. So as the vehicle falls into the water, at 85% vehicle height (seemingly the default for road vehicles) it will stop sinking to float for a moment before it sinks (boats excluded).',
    type: 'number',
  },
  { key: 'percentSubmergedRatio', min: -100, max: 100, step: 0.01, hint: '', type: 'number' },
  // ! END DIVIDER PHYSICAL
  { type: 'divider', hint: 'Transmission', key: '_', min: 0, max: 0, step: 0 },
  //TODO
  { key: 'acceleration', min: 0.001, max: 10, step: 0.001, hint: '', type: 'number' },
  //TODO VALUES
  {
    key: 'clutchChangeRateScaleDownShift',
    min: 0.01,
    max: 15,
    step: 0.01,
    hint: 'Clutch speed multiplier on up shifts, bigger number = faster shifts. Recommended to not go over 13. A value of 1 = 0.9 seconds to shift gears',
    type: 'number',
  },
  {
    key: 'clutchChangeRateScaleUpShift',
    min: 0.01,
    max: 15,
    step: 0.01,
    hint: 'Clutch speed multiplier on down shifts, bigger number = faster shifts. Recommended to not go over 13. A value of 1 = 0.9 seconds to shift gears.',
    type: 'number',
  },
  {
    key: 'driveBiasFront',
    min: 0,
    max: 1,
    step: 0.01,
    hint: 'This value is used to determine whether a vehicle is front, rear, or four wheel drive. 0.0 is rear wheel drive, 1.0 is front wheel drive, and any value between 0.01 and 0.99 is four wheel drive (0.5 give both front and rear axles equal force, being perfect 4WD.)',
    type: 'number',
  },
  {
    key: 'driveInertia',
    min: 0.01,
    max: 2,
    step: 0.01,
    hint: 'Describes how fast an engine will rev. For example an engine with a long stroke crank and heavy flywheel will take longer to redline than an engine with a short stroke and light flywheel. Default value is 1.0, or no modification of drive intertia. Bigger value = quicker redline',
    type: 'number',
  },
  { key: 'driveMaxFlatVel', min: 0, max: 500, step: 1, hint: '', type: 'number' },
  {
    key: 'handBrakeForce',
    min: 0.01,
    max: 100,
    step: 0.01,
    hint: 'Braking power for handbrake. Bigger number = harder braking',
    type: 'number',
  },
  {
    key: 'initialDriveForce',
    min: 0.001,
    max: 10,
    step: 0.001,
    hint: 'This value specifies the drive force of the car, at the wheels. 1.0 uses drive force calculation unmodified. Values less than 1.0 will in effect give the vehicle less drive force and values greater than 1.0 will produce more drive force. Most cars have between 0.10 and 0.40. This value is calculated with the vehicle weight, so heavy and light vehicles have an accurate acceleration.',
    type: 'number',
  },
  {
    key: 'initialDriveGears',
    min: 0,
    max: 10,
    step: 1,
    hint: "How many forward speeds a transmission contains. It is not recommended to have a value higher than 8 here as issues with downshifting can occur if the car's top gear is 9 or higher.",
    type: 'number',
  },
  {
    key: 'initialDriveMaxFlatVel',
    min: 0.01,
    max: 200,
    step: 0.01,
    hint: "Determines the speed at redline in top gear; Controls the final drive of the vehicle's gearbox. Setting this value does not guarantee the vehicle will reach this speed. Multiply the number in the file by 0.82 to get the speed in mph or multiply by 1.32 to get kph. To find the right value for a given kph figure, kph * 0.75. To convert mph, multiply by 1.22. 'TopSpeedKph = (InitialDriveMaxFlatVel * 1.2) / 0.9' The top speeds for different gears can be calculated by replacing the 0.9 in the formula with the ratio of the specific gear. GTA V uses a ratio of 0.9 for the top gear by default.",
    type: 'number',
  },
  {
    key: 'steeringLock',
    min: 0.001,
    max: 2,
    step: 0.001,
    hint: "This value is a multiplier of the game's calculation of the angle a steer wheel will turn while at full turn. Steering lock is directly related to over or understeer / turning radius. Values around 0.1 - 0.2 will simulate a long wheelbase. Whereas a value of around 0.75 and above will turn extremely fast. To high of a value here will cause the vehicle to spin out too easily.",
    type: 'number',
  },
  { key: 'steeringLockRatio', min: 0.001, max: 2, step: 0.001, hint: '', type: 'number' },
  // ! END DIVIDER TRANSMISSION
  {
    key: 'brakeBiasFront',
    min: 0.001,
    max: 2,
    step: 0.001,
    hint: 'This controls the distribution of braking force between the front and rear axles. 0.0 means the rear axle only receives brake force, 1.0 means the front axle only receives brake force. 0.5 gives both axles equal brake force. A value between 0.01 and 0.49 means the rear axle will receive more brake force than the front and a value between .051 and 0.99 means the front axles will receive more brake force than the rear. In real life, normal vehicles usually have more front braking force than the rear (eg., 0.65).',
    type: 'number',
  },
  { key: 'brakeBiasRear', min: 0.001, max: 2, step: 0.001, hint: 'CHECK WITH FRONT', type: 'number' },
  {
    key: 'brakeForce',
    min: 0.001,
    max: 10,
    step: 0.001,
    hint: "Multiplies the game's calculation of deceleration. Bigger number = harder braking. 1.0 uses brake force calculation unmodified.",
    type: 'number',
  },
  { type: 'divider', hint: 'Traction', key: '_', min: 0, max: 0, step: 0 },
  {
    key: 'camberStiffness',
    min: -1,
    max: 3,
    step: 0.01,
    hint: 'How much the vehicle is pushed towards its roll direction. Road camber also affects roll and applied forces. Values smaller than 0.0 or greater than 1.0 create unrealistic forces.',
    type: 'number',
  },
  {
    key: 'lowSpeedTractionLossMult',
    min: 0,
    max: 4,
    step: 0.01,
    hint: 'How much traction is reduced at low speed, 0.0 means normal traction. It affects mainly car burnout (spinning wheels when car doesnt move) when pressing gas. Decreasing value will cause less burnout, less sliding at start. However, the higher value, the more burnout car gets. Optimal is 1.0. A completely artificial force.',
    type: 'number',
  },
  //TODO ALL TRACTION VALUES
  {
    key: 'tractionBiasFront',
    min: 0.001,
    max: 2,
    step: 0.001,
    hint: 'Determines the distribution of traction from front to rear. 0.01 = only rear axle has traction. 0.99 = only front axle has traction. 0.5 = both axles have equal traction. Entering a value of 0.0 or 1.0 causes the vehicle to have no traction (the tires actually fail to spawn), while entering a value outside of specified range causes the car to move irrationally whenever the wheels are touching the ground.',
    type: 'number',
  },
  { key: 'tractionBiasRear', min: 0.001, max: 2, step: 0.001, hint: ' CHECK WITH FRONT', type: 'number' },
  {
    key: 'tractionCurveLateral',
    min: 0.001,
    max: 10,
    step: 0.001,
    hint: "Shape of lateral traction curve (peak traction position in degrees). Lower values make the vehicle's grip more responsive but less forgiving to loss of traction. Higher values make the vehicle's grip less responsive but more forgiving to loss of traction. Also known as 'slip angle'.",
    type: 'number',
  },
  { key: 'tractionCurveLateralRatio', min: 0.001, max: 10, step: 0.001, hint: '', type: 'number' },
  {
    key: 'tractionCurveMax',
    min: 0.001,
    max: 5,
    step: 0.001,
    hint: 'Cornering grip of the vehicle as a multiplier of the tire surface friction. Effectively the peak grip status before any loss of grip.',
    type: 'number',
  },
  { key: 'tractionCurveMaxRatio', min: 0.001, max: 10, step: 0.001, hint: '', type: 'number' },
  {
    key: 'tractionCurveMin',
    min: 0.001,
    max: 5,
    step: 0.001,
    hint: 'Accelerating/braking grip of the vehicle as a multiplier of the tire surface friction. Effectively the minimum grip status after losing traction, e.g. in a skidding situation.',
    type: 'number',
  },
  { key: 'tractionCurveMinRatio', min: 0.001, max: 10, step: 0.001, hint: '', type: 'number' },
  {
    key: 'tractionLossMult',
    min: 0.001,
    max: 4,
    step: 0.001,
    hint: 'How much is traction affected by material grip differences from 1.0. Basically it affects how much grip is changed when driving on asphalt and mud (the higher, the more grip you loose, making car less responsive and prone to sliding).',
    type: 'number',
  },
  {
    key: 'tractionSpringDeltaMax',
    min: 0.001,
    max: 10,
    step: 0.001,
    hint: 'Max distance of the lateral sidewall travel. Unit: meter. A force will pull the vehicle in the opposite direction of the lateral travel, most noticeable when stopping after a slide. The dynamic effect is a small force pulling the vehicle inwards of a corner, more noticeable as the sliding angle increases.',
    type: 'number',
  },
  { key: 'tractionSpringDeltaMaxRatio', min: 0.001, max: 10, step: 0.001, hint: '', type: 'number' },
  // ! END DIVIDER WHEEL TRACTION
  { type: 'divider', hint: 'Suspension', key: '_', min: 0, max: 0, step: 0 },
  {
    key: 'antiRollBarBiasFront',
    min: 0.001,
    max: 2,
    step: 0.001,
    hint: 'The bias between front and rear for the antiroll bar(0 front, 1 rear)',
    type: 'number',
  },
  { key: 'antiRollBarBiasRear', min: 0.001, max: 2, step: 0.001, hint: 'CHECK WITH FRONT', type: 'number' },
  {
    key: 'antiRollBarForce',
    min: 0.001,
    max: 5,
    step: 0.001,
    hint: 'The spring constant that is transmitted to the opposite wheel when under compression larger numbers are a larger force. Larger Numbers = less body roll',
    type: 'number',
  },
  {
    key: 'rollCentreHeightFront',
    min: 0.001,
    max: 2,
    step: 0.001,
    hint: 'The roll center height for the front axle, from the bottom of the model (road), in meters. High values place the roll center closer to the center of mass, reducing body roll. Values placing the roll center higher than the center of mass will induce negative body roll - the "Tyrus Effect". Low values increase the roll center distance from the center of mass, increasing body roll. Values placing the roll center too far from the center of mass may increase rollover chances. Since center of mass differs per vehicle, using a visualization tool may help determining a desired amount of body roll.',
    type: 'number',
  },
  {
    key: 'rollCentreHeightRear',
    min: 0.001,
    max: 2,
    step: 0.001,
    hint: 'The roll center height for the rear axle, from the bottom of the model (road), in meters. High values place the roll center closer to the center of mass, reducing body roll. Values placing the roll center higher than the center of mass will induce negative body roll - the "Tyrus Effect". Low values increase the roll center distance from the center of mass, increasing body roll. Values placing the roll center too far from the center of mass may increase rollover chances. Since center of mass differs per vehicle, using a visualization tool may help determining a desired amount of body roll.',
    type: 'number',
  },
  {
    key: 'suspensionBiasFront',
    min: 0.001,
    max: 1,
    step: 0.001,
    hint: 'Force damping scale front/back. If more wheels at back (e.g. trucks) need front suspension to be stronger. This value determines which suspension is stronger, front or rear. If value is above 0.50 then front is stiffer, when below, rear.',
    type: 'number',
  },
  { key: 'suspensionBiasRear', min: 0, max: 1, step: 0.01, hint: 'CHECK WITH FRONT', type: 'number' },
  {
    key: 'suspensionCompDamp',
    min: 0,
    max: 30,
    step: 0.01,
    hint: 'Damping during strut compression. Bigger = stiffer.',
    type: 'number',
  },
  {
    key: 'suspensionForce',
    min: 0,
    max: 30,
    step: 0.01,
    hint: '1 / (Force * NumWheels) = Lower limit for zero force at full extension. Affects how strong suspension is. Can help if car is easily flipped over when turning.',
    type: 'number',
  },
  {
    key: 'suspensionLowerLimit',
    min: -2,
    max: 0.5,
    step: 1,
    hint: 'Visual limit... how far can wheels move up / down from original position',
    type: 'number',
  },
  {
    key: 'suspensionRaise',
    min: -0.2,
    max: 0.5,
    step: 0.001,
    hint: 'The amount that the suspension raises the body off the wheels. Recommend adjusting at second decimal unless vehicle has room to move. ie -0.02 is plenty of drop on an already low car. Too much will show the wheels clipping through or if positive, no suspension joining the body to wheels',
    type: 'number',
  },
  {
    key: 'suspensionReboundDamp',
    min: 0,
    max: 30,
    step: 0.01,
    hint: 'Damping during strut rebound. Bigger = stiffer',
    type: 'number',
  },
  {
    key: 'suspensionUpperLimit',
    min: -0.5,
    max: 2,
    step: 0.01,
    hint: 'Visual limit... how far can wheels move up / down from original position',
    type: 'number',
  },
  // ! END DIVIDER SUSPENSION
  { type: 'divider', hint: 'Damage', key: '_', min: 0, max: 0, step: 0 },
  {
    key: 'collisionDamageMult',
    min: 0,
    max: 10,
    step: 0.01,
    hint: 'Multiplies the games calculation of damage to the vehicle through collision, causing gas tank and wheels to catch fire. 0.0 = no damage through collision. 10.0 = Ten times damage through collision. Higher values make body parts fall off more easily. Also enables engine damage.',
    type: 'number',
  },
  {
    key: 'deformationDamageMult',
    min: 0,
    max: 10,
    step: 0.01,
    hint: 'Multiplies the games calculation of deformation-causing damage. 0.0 = no deformation through damage is possible. 10.0 = Ten times deformation-causing damage.',
    type: 'number',
  },
  {
    key: 'engineDamageMult',
    min: 0,
    max: 10,
    step: 0.01,
    hint: 'Multiplies the games calculation of damage to the engine, causing explosion or engine failure. 0.0 = no damage to the engine. 10.0 = Ten times damage to the engine. This value seems to respond mostly to impacts directly on the hood, and not as much to front end impacts (particularly with taller vehicles).',
    type: 'number',
  },
  {
    key: 'weaponDamageMult',
    min: 0,
    max: 10,
    step: 0.01,
    hint: 'Multiplies the games calculation of damage to the vehicle through weapon damage. 0.0 = no damage through weapons. 10.0 = Ten times damage through weapons.',
    type: 'number',
  },
  { key: 'oilVolume', min: 0, max: 20, step: 0.1, hint: 'Black smoke time before engine dies?', type: 'number' },
  {
    key: 'petrolTankVolume',
    min: 0,
    max: 1000,
    step: 10,
    hint: 'Amount of petrol that will leak after shooting the vehicles petrol tank. Also used by some fuel-usage scripts.',
    type: 'number',
  },
  // ! END DIVIDER DAMAGE
  { type: 'divider', hint: 'Misc', key: '_', min: 0, max: 0, step: 0 },
  {
    key: 'handlingFlags',
    min: 0,
    max: 32,
    step: 1,
    hint: 'Affects handling-related functions. See Wiki for Explanations.',
    type: 'flags',
  },
  {
    key: 'modelFlags',
    min: 0,
    max: 32,
    step: 1,
    hint: 'Affects model-related functions. See Wiki for explanations.',
    type: 'flags',
  },
  {
    key: 'damageFlags',
    min: 0,
    max: 6,
    step: 1,
    hint: 'Indicates the doors that are nonbreakable. See wiki for Explanations.',
    type: 'flags',
  },
  { key: 'monetaryValue', min: 0, max: 999999, step: 1, hint: 'Vehicle worth.', type: 'number' },
  {
    key: 'seatOffsetDistX',
    min: -2,
    max: 2,
    step: 0.01,
    hint: 'The distance from the door to the car seat. Driver > passenger',
    type: 'number',
  },
  {
    key: 'seatOffsetDistY',
    min: -2,
    max: 2,
    step: 0.01,
    hint: 'The distance from the door to the car seat. Trunk > hood',
    type: 'number',
  },
  {
    key: 'seatOffsetDistZ',
    min: -10,
    max: 10,
    step: 0.01,
    hint: 'The distance from the door to the car seat. Undercarriage > roof',
    type: 'number',
  },
  // ! END DIVIDER MISC
];

export const modelFlags = [
  'IS_VAN',
  'IS_BUS',
  'IS_LOW',
  'IS_BIG',
  'ABS_STD',
  'ABS_OPTION',
  'ABS_ALT_STD',
  'ABS_ALT_OPTION',
  'NO_DOORS',
  'TANDEM_SEATING',
  'SIT_IN_BOAT',
  'HAS_TRACKS',
  'NO_EXHAUST',
  'DOUBLE_EXHAUST',
  'NO_1STPERSON_LOOKBEHIND',
  'CAN_ENTER_IF_NO_DOOR',
  'AXLE_F_TORSION',
  'AXLE_F_SOLID',
  'AXLE_F_MCPHERSON',
  'ATTACH_PED_TO_BODYSHELL',
  'AXLE_R_TORSION',
  'AXLE_R_SOLID',
  'AXLE_R_MCPHERSON',
  'DONT_FORCE_GRND_CLEARANCE',
  'DONT_RENDER_STEER',
  'NO_WHEEL_BURST',
  'INDESTRUCTIBLE',
  'DOUBLE_FRONT_WHEELS',
  'IS_RC',
  'DOUBLE_REAR_WHEELS',
  'NO_WHEEL_BREAK',
  'IS_HATCHBACK',
] as const;

export const handlingFlags = [
  'SMOOTHED_COMPRESSION',
  'REDUCED_MOD_MASS',
  'HAS_KERS',
  'HAS_TRACKS',
  'NO_HANDBRAKE',
  'STEER_REARWHEELS',
  'HANDBRAKE_REARWHEELSTEER',
  'STEER_ALL_WHEELS',
  'FREEWHEEL_NO_GAS',
  'NO_REVERSE',
  '_0x4C11C7F9',
  'STEER_NO_WHEELS',
  'CVT',
  'ALT_EXT_WHEEL_BOUNDS_BEH',
  'DONT_RAISE_BOUNDS_AT_SPEED',
  'EXT_WHEEL_BOUNDS_COL',
  'LESS_SNOW_SINK',
  'TYRES_CAN_CLIP',
  '_0x2DEA7A05',
  'HEAVY_VEHICLE',
  'OFFROAD_ABILITIES',
  'OFFROAD_ABILITIES_X2',
  'TYRES_RAISE_SIDE_IMPACT_THRESHOLD',
  '_INCREASED_GRAVITY',
  'ENABLE_LEAN',
  '_ALLOW_MOTORCYCLE_TRACTION_LOSS',
  'HEAVYARMOUR',
  'ARMOURED',
  'SELF_RIGHTING_IN_WATER',
  'IMPROVED_RIGHTING_FORCE',
  'USE_EXTRA_SOFT_SURFACE_SUS',
  'LAST_AVAILABLE_FLAG',
] as const;

export const damageFlags = ['DRIVER_SIDE_FRONT_DOOR', 'DRIVER_SIDE_REAR_DOOR', 'DRIVER_PASSENGER_SIDE_FRONT_DOOR', 'DRIVER_PASSENGER_SIDE_REAR_DOOR', 'BONNET', 'BOOT'] as const;

const MIN_AND_MAX_VALUES = {
  Mass: {
    min: 85,
    minCount: 1,
    max: 60000,
    maxCount: 1,
    avg: 3287.3440428380204,
  },
  InitialDragCoeff: {
    min: 0.9,
    minCount: 1,
    max: 300,
    maxCount: 1,
    avg: 10.45523159303884,
  },
  PercentSubmerged: {
    min: 45,
    minCount: 1,
    max: 200,
    maxCount: 26,
    avg: 87.7777777777779,
  },
  InertiaMultiplier_X: {
    min: 0.5,
    minCount: 1,
    max: 2,
    maxCount: 1,
    avg: 1.0646864792503388,
  },
  InertiaMultiplier_Y: {
    min: 0.4,
    minCount: 1,
    max: 3,
    maxCount: 1,
    avg: 1.27765595716198,
  },
  InertiaMultiplier_Z: {
    min: 0.5,
    minCount: 1,
    max: 10,
    maxCount: 1,
    avg: 1.391171352074966,
  },
  DriveBiasFront: {
    min: 0,
    minCount: 521,
    max: 1,
    maxCount: 42,
    avg: 0.15698795180722885,
  },
  InitialDriveGears: {
    min: 1,
    minCount: 141,
    max: 8,
    maxCount: 23,
    avg: 4.360107095046891,
  },
  InitialDriveForce: {
    min: 0,
    minCount: 17,
    max: 18,
    maxCount: 2,
    avg: 0.5794487282463185,
  },
  DriveInertia: {
    min: 0.1,
    minCount: 1,
    max: 2.5,
    maxCount: 2,
    avg: 0.9875502008032204,
  },
  ClutchChangeRateScaleUpShift: {
    min: 0.3,
    minCount: 1,
    max: 13,
    maxCount: 1,
    avg: 2.786211512717543,
  },
  ClutchChangeRateScaleDownShift: {
    min: 0.3,
    minCount: 1,
    max: 11,
    maxCount: 1,
    avg: 2.774297188755029,
  },
  InitialDriveMaxFlatVel: {
    min: 10,
    minCount: 2,
    max: 328.6,
    maxCount: 8,
    avg: 142.0940160642568,
  },
  BrakeForce: {
    min: 0.001,
    minCount: 1,
    max: 5,
    maxCount: 3,
    avg: 0.7072971887550203,
  },
  BrakeBiasFront: {
    min: 0,
    minCount: 1,
    max: 0.8,
    maxCount: 2,
    avg: 0.5703318607764363,
  },
  HandBrakeForce: {
    min: 0.01,
    minCount: 16,
    max: 6,
    maxCount: 1,
    avg: 0.5951037483266404,
  },
  SteeringLock: {
    min: 20,
    minCount: 3,
    max: 55,
    maxCount: 4,
    avg: 37.75455153949141,
  },
  TractionCurveMax: {
    min: 0,
    minCount: 20,
    max: 3.7,
    maxCount: 1,
    avg: 2.091393708165998,
  },
  TractionCurveMin: {
    min: 0,
    minCount: 20,
    max: 3.5,
    maxCount: 1,
    avg: 1.8699567603748315,
  },
  TractionCurveLateral: {
    min: 1,
    minCount: 3,
    max: 120,
    maxCount: 1,
    avg: 20.03591700133862,
  },
  TractionSpringDeltaMax: {
    min: 0,
    minCount: 9,
    max: 0.5,
    maxCount: 1,
    avg: 0.1246653279785797,
  },
  LowSpeedTractionLossMult: {
    min: 0,
    minCount: 195,
    max: 2.2,
    maxCount: 2,
    avg: 0.7788085676037493,
  },
  CamberStiffnesss: {
    min: 0,
    minCount: 705,
    max: 1.12,
    maxCount: 2,
    avg: 0.04637215528781796,
  },
  TractionBiasFront: {
    min: 0.325,
    minCount: 1,
    max: 0.95,
    maxCount: 20,
    avg: 0.4983073493975919,
  },
  TractionLossMult: {
    min: 0,
    minCount: 65,
    max: 1.4,
    maxCount: 2,
    avg: 0.813386880856765,
  },
  SuspensionForce: {
    min: 0,
    minCount: 1,
    max: 9,
    maxCount: 1,
    avg: 2.547935742971896,
  },
  SuspensionCompDamp: {
    min: 0,
    minCount: 3,
    max: 8,
    maxCount: 4,
    avg: 1.6689022757697471,
  },
  SuspensionReboundDamp: {
    min: 0,
    minCount: 18,
    max: 10.8,
    maxCount: 1,
    avg: 2.5877844712182148,
  },
  SuspensionUpperLimit: {
    min: 0,
    minCount: 1,
    max: 0.8,
    maxCount: 3,
    avg: 0.13028112449799148,
  },
  SuspensionLowerLimit: {
    min: -0.4,
    minCount: 1,
    max: 0.1,
    maxCount: 18,
    avg: -0.12232262382864761,
  },
  SuspensionRaise: {
    min: -0.085,
    minCount: 5,
    max: 0.35,
    maxCount: 1,
    avg: 0.0035515394912985273,
  },
  SuspensionBiasFront: {
    min: 0,
    minCount: 20,
    max: 0.85,
    maxCount: 1,
    avg: 0.4850736278447127,
  },
  AntiRollBarForce: {
    min: 0,
    minCount: 212,
    max: 3,
    maxCount: 1,
    avg: 0.501900937081659,
  },
  AntiRollBarBiasFront: {
    min: 0,
    minCount: 203,
    max: 1,
    maxCount: 2,
    avg: 0.38391439089691926,
  },
  RollCentreHeightFront: {
    min: 0,
    minCount: 89,
    max: 1.2,
    maxCount: 3,
    avg: 0.2462416331994641,
  },
  RollCentreHeightRear: {
    min: 0,
    minCount: 90,
    max: 1.2,
    maxCount: 3,
    avg: 0.24652074966532753,
  },
  CollisionDamageMult: {
    min: 0.005,
    minCount: 4,
    max: 2,
    maxCount: 3,
    avg: 0.8544712182061582,
  },
  WeaponDamageMult: {
    min: 0.03,
    minCount: 3,
    max: 4,
    maxCount: 1,
    avg: 0.9196787148594449,
  },
  DeformationDamageMult: {
    min: 0,
    minCount: 1,
    max: 5,
    maxCount: 3,
    avg: 0.967469879518063,
  },
  EngineDamageMult: {
    min: 0.01,
    minCount: 5,
    max: 2.5,
    maxCount: 1,
    avg: 1.4332663989290628,
  },
  PetrolTankVolume: {
    min: 0,
    minCount: 32,
    max: 5000,
    maxCount: 1,
    avg: 70.72824631860793,
  },
  OilVolume: {
    min: 0,
    minCount: 34,
    max: 10,
    maxCount: 11,
    avg: 5.23828647925038,
  },
  SeatOffsetDistX: {
    min: -0.2,
    minCount: 3,
    max: 0.3,
    maxCount: 2,
    avg: 0.014900937081659986,
  },
  SeatOffsetDistY: {
    min: -0.6,
    minCount: 1,
    max: 0.3,
    maxCount: 2,
    avg: -0.056109772423025346,
  },
  SeatOffsetDistZ: {
    min: -0.4,
    minCount: 6,
    max: 0.5,
    maxCount: 7,
    avg: 0.02049129852744312,
  },
  MonetaryValue: {
    min: 10000,
    minCount: 3,
    max: 500000,
    maxCount: 3,
    avg: 59064.25702811203,
  },
  CentreOfMassOffset_X: {
    min: 0.025,
    minCount: 2,
    max: 0.025,
    maxCount: 2,
    avg: 0.00006693440428380188,
  },
  CentreOfMassOffset_Y: {
    min: -1.4,
    minCount: 1,
    max: -0.8,
    maxCount: 1,
    avg: -0.0029451137884872825,
  },
  CentreOfMassOffset_Z: {
    min: -0.9,
    minCount: 1,
    max: -0.4,
    maxCount: 1,
    avg: -0.0017402945113788489,
  },
};

export default handlingOptions;
