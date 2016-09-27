var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;
module.exports = mongoose.model('preset', {
    name: {
        type: String,
        default: ''
    },
    low_mid_hi_low_q: {
        type: String,
        default: ''
    },
    low_mid_freq_hz: {
        type: Number,
        default: 0
    },
    low_mid_gain: {
        type: Number,
        default: 0
    },
    hi_mid_band: {
        type: String,
        default: ''
    },
    hi_mid_freq_khz: {
        type: Number,
        default: 0
    },
    hi_mid_gain: {
        type: String,
        default: ''
    },
    hi_band: {
        type: String,
        default: ''
    },
    hi_peak_shelf: {
        type: String,
        default: ''
    },
    hi_freq_khz: {
        type: SchemaTypes.Double,
        default: ''
    },
    hi_gain: {
        type: Number,
        default: 0
    },

    low_peak_shelf: {
        type: String,
        default: ''
    },
    low_freq_hz: {
        type: String,
        default: ''
    },
    low_gain: {
        type: Number,
        default: 0
    },
    low_mid_band: {
        type: String,
        default: ''
    },
    low_band: {
        type: String,
        default: ''
    }
});
