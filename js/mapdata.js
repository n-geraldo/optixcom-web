var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#e5007d",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    AL01: {
      name: "Berat"
    },
    AL02: {
      name: "Durrës"
    },
    AL03: {
      name: "Elbasan"
    },
    AL04: {
      name: "Fier"
    },
    AL05: {
      name: "Gjirokastër"
    },
    AL06: {
      name: "Korçë"
    },
    AL07: {
      name: "Kukës"
    },
    AL08: {
      name: "Lezhë"
    },
    AL09: {
      name: "Dibër"
    },
    AL10: {
      name: "Shkodër"
    },
    AL11: {
      name: "Tiranë"
    },
    AL12: {
      name: "Vlorë"
    }
  },
  locations: {
    "0": {
      name: "Tirana",
      lat: "41.3275",
      lng: "19.818889"
    }
  },
  labels: {
    "0": {
      name: "Berat",
      x: 468.3,
      y: 654,
      parent_id: "AL01"
    },
    "1": {
      name: "Durrës",
      x: 357.3,
      y: 436,
      parent_id: "AL02"
    },
    "2": {
      name: "Elbasan",
      x: 502.3,
      y: 534.8,
      parent_id: "AL03"
    },
    "3": {
      name: "Fier",
      x: 365.7,
      y: 622.6,
      parent_id: "AL04"
    },
    "4": {
      name: "Gjirokastër",
      x: 515.4,
      y: 795,
      parent_id: "AL05"
    },
    "5": {
      name: "Korçë",
      x: 623,
      y: 651.6,
      parent_id: "AL06"
    },
    "6": {
      name: "Kukës",
      x: 469.7,
      y: 127.5,
      parent_id: "AL07"
    },
    "7": {
      name: "Lezhë",
      x: 425.4,
      y: 303.2,
      parent_id: "AL08"
    },
    "8": {
      name: "Dibër",
      x: 511.2,
      y: 377,
      parent_id: "AL09"
    },
    "9": {
      name: "Shkodër",
      x: 379,
      y: 207.2,
      parent_id: "AL10"
    },
    "10": {
      name: "Tiranë",
      x: 434.2,
      y: 457.2,
      parent_id: "AL11"
    },
    "11": {
      name: "Vlorë",
      x: 377.7,
      y: 760.1,
      parent_id: "AL12"
    },
    AL01: {
      name: "Berat",
      parent_id: "AL01",
      x: 468.3,
      y: 654
    },
    AL02: {
      name: "Durrës",
      parent_id: "AL02",
      x: 357.3,
      y: 436
    },
    AL03: {
      name: "Elbasan",
      parent_id: "AL03",
      x: 502.3,
      y: 534.8
    },
    AL04: {
      name: "Fier",
      parent_id: "AL04",
      x: 365.7,
      y: 622.6
    },
    AL05: {
      name: "Gjirokastër",
      parent_id: "AL05",
      x: 515.4,
      y: 795
    },
    AL06: {
      name: "Korçë",
      parent_id: "AL06",
      x: 623,
      y: 651.6
    },
    AL07: {
      name: "Kukës",
      parent_id: "AL07",
      x: 469.7,
      y: 127.5
    },
    AL08: {
      name: "Lezhë",
      parent_id: "AL08",
      x: 425.4,
      y: 303.2
    },
    AL09: {
      name: "Dibër",
      parent_id: "AL09",
      x: 511.2,
      y: 377
    },
    AL10: {
      name: "Shkodër",
      parent_id: "AL10",
      x: 379,
      y: 207.2
    },
    AL11: {
      name: "Tiranë",
      parent_id: "AL11",
      x: 434.2,
      y: 457.2
    },
    AL12: {
      name: "Vlorë",
      parent_id: "AL12",
      x: 377.7,
      y: 760.1
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
