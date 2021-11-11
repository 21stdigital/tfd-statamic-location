

<template>
  <div>
    <input class="input-text" ref="inputRef" type="text" :value="initialText" @blur="handleBlur">
  </div>
</template>

<script>

  const ADDRESS_COMPONENTS = {
    route: 'long_name',
    street_number: 'short_name',
    postal_code: 'short_name',
    city: 'long_name',
    country: 'long_name',
    // subpremise : 'short_name',
    // locality: 'long_name',
    // administrative_area_level_1: 'short_name',
    // administrative_area_level_2: 'long_name',
  };
  const CITIES_TYPE = ['locality', 'administrative_area_level_3'];
  const REGIONS_TYPE = ['locality', 'sublocality', 'postal_code', 'country',
    'administrative_area_level_1', 'administrative_area_level_2'];
  /*
  By default, we're only including basic place data because requesting these
  fields place data is not additionally charged by Google. Please refer to:
  https://developers.google.com/maps/billing/understanding-cost-of-use#basic-data
  */
  const BASIC_DATA_FIELDS = ['address_components', 'adr_address', 'alt_id',
    'formatted_address', 'geometry', 'icon', 'id', 'name',
    'business_status', 'photo', 'place_id', 'scope', 'type', 'url',
    'utc_offset_minutes', 'vicinity'];

  export default {
    mixins: [Fieldtype],
    data: () => {
      return {
        location: '',
        searchResults: [],
        autoCompleteService: null, // will reveal this later 🕵️
        initialText: ''
      }
    },
    metaInfo () {
      return {
        script: [{
          src: `https://maps.googleapis.com/maps/api/js?key=${this.meta.googleMapsApiKey}&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.MapsInit() // will declare it in methods
        }]
      }
    },
    mounted () {
      if (this.value) {
        this.initialText = this.value.formatted_address
      }
    },
    beforeUpdate () {
      this.initialText = this.value.formatted_address
    },
    methods: {
      handleBlur () {
        console.log(this.$refs)
        if (this.$refs.inputRef.value === "") {
          this.update(null)
        }
      },
      onPlaceChanged () {
        let place = this.autocompleteService.getPlace();

        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          this.update(null)
          return;
        }

        const formatted = this.formatResult(place)
        console.log(place, formatted)
        this.update(formatted)

      },
      MapsInit () {
        this.autocompleteService = new google.maps.places.Autocomplete(
            this.$refs.inputRef,
            {
              fields: BASIC_DATA_FIELDS
            }
        );
        this.autocompleteService.addListener('place_changed', this.onPlaceChanged);
      },

      formatResult (place) {
        let returnData = {};
        for (let i = 0; i < place.address_components.length; i++) {
            let addressType = place.address_components[i].types[0];
            if (ADDRESS_COMPONENTS[addressType]) {
                let val = place.address_components[i][ADDRESS_COMPONENTS[addressType]];
                returnData[addressType] = val;
            }
        }
        returnData['latitude'] = place.geometry.location.lat();
        returnData['longitude'] = place.geometry.location.lng();
        returnData['formatted_address'] = place.formatted_address;
        return returnData
      },
    }
  }
</script>
