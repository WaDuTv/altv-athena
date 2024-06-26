import IVehicleMod from './vehicleMod.js';
import IVehicleModStance from './vehicleModStance.js';
import IVehicleModWheels from './vehicleModWheels.js';

/**
 * Tuning to apply to an owned vehicle.
 *
 *
 * @interface IVehicleTuning
 */
export interface IVehicleTuning {
    /**
     * Cannot exceed modkit count
     *
     * @type {number}
     *
     */
    modkit: number;

    /**
     * Mods to apply to this vehicle
     *
     * @type {Array<IVehicleMod>}
     *
     */
    mods: Array<IVehicleMod>;

    /**
     * Handling data to apply to this vehicle
     *
     * @type {Partial<IVehicleHandling>}
     *
     */
    // handling: Partial<IVehicleHandling>;

    /**
     * Stance to apply to this vehicle
     *
     * @type {Array<IVehicleMod>}
     *
     */
    stance: Array<IVehicleModStance>;

    /**
     * Wheels to apply to this vehicle
     *
     * @type {Array<IVehicleMod>}
     *
     */
    wheels: Array<IVehicleModWheels>;
}

export default IVehicleTuning;
