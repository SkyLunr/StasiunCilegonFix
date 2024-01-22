(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist,this.mainPlayList])",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_331E8304_276B_F7ED_41AC_8248CEB6859C",
  "this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_188582C9_12DB_2ED0_41A2_3161167B8241_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BB923BF_2AFB_EA82_41C2_813BFACD7CAD",
 "idleSequence": "this.sequence_3BB923BF_2AFB_EA82_41C2_813BFACD7CAD",
 "id": "camera_3BB913BF_2AFB_EA82_41A7_28D3C0ACDF39",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Toilet",
 "hfovMin": "150%",
 "id": "panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E",
 "overlays": [
  "this.overlay_00C7D61E_137B_A3EA_417E_848953714D38",
  "this.overlay_00C5C48E_137D_60EB_41A7_D6C58FAD0457",
  "this.overlay_00FA4ADB_137D_A069_41A7_21DCDC84CACE",
  "this.overlay_3381D4DD_272C_521F_41A9_AD22DB1546CC",
  "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -92.16,
   "class": "AdjacentPanorama",
   "backwardYaw": -89.07,
   "panorama": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3",
   "distance": 1
  },
  {
   "yaw": 95.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -98.17,
   "panorama": "this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_camera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BF3234E_2AFB_EB82_4198_5CD101F2D8AD",
 "idleSequence": "this.sequence_3BF3234E_2AFB_EB82_4198_5CD101F2D8AD",
 "id": "camera_3BF3134E_2AFB_EB82_41B9_EE10EDC118A3",
 "timeToIdle": 5000
},
{
 "displayPlaybackBar": true,
 "buttonMoveDown": "this.IconButton_331F0304_276B_F7ED_41B5_815D876047E2",
 "buttonZoomIn": "this.IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A",
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_331F12FE_276B_F61A_41C1_4E3823931E39",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonPlayRight": "this.IconButton_331EC304_276B_F7ED_418C_C3184E7314BC",
 "buttonMoveRight": "this.IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226",
 "buttonPlayLeft": "this.IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_331F72FE_276B_F61A_41C2_5C258FB11721",
 "buttonZoomOut": "this.IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE",
 "buttonPause": "this.IconButton_331F1304_276B_F7ED_41BB_2BC0DB9FFF4A",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveUp": "this.IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A"
},
{
 "headerBackgroundColorDirection": "vertical",
 "id": "window_3375A0D7_272C_B26B_41AF_FDF428F23B42",
 "backgroundOpacity": 1,
 "titleFontColor": "#000000",
 "paddingLeft": 0,
 "closeButtonIconHeight": 20,
 "overflow": "scroll",
 "width": 400,
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "modal": true,
 "propagateClick": false,
 "headerBorderColor": "#000000",
 "scrollBarWidth": 10,
 "class": "Window",
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "bodyBackgroundOpacity": 0,
 "minWidth": 20,
 "titleFontWeight": "normal",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "backgroundColor": [],
 "headerPaddingRight": 0,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "shadow": true,
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundOpacity": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowBlurRadius": 6,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.viewer_uid3F0E62DF_2AFB_EA82_418E_B945EFECE0DC"
 ],
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "borderRadius": 5,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 20,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [],
 "gap": 10,
 "paddingTop": 0,
 "layout": "vertical",
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#B2B2B2",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window14819"
 },
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "titleFontFamily": "Arial"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 80.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BD97399_2AFB_EA8E_41B8_C29B90FF27A5",
 "idleSequence": "this.sequence_3BD97399_2AFB_EA8E_41B8_C29B90FF27A5",
 "id": "camera_3BD96399_2AFB_EA8E_41B5_D392AE8A0461",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_camera",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 1",
 "hfovMin": "150%",
 "id": "panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0",
 "overlays": [
  "this.overlay_02A380D5_136C_A07E_4191_FE51E9681E07",
  "this.overlay_004FFA0D_136D_A3E9_41AA_9B8058E91C2C",
  "this.overlay_050EBFDF_1364_E069_41A9_F8A856E85094",
  "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -93.72,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.35,
   "panorama": "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E",
   "distance": 1
  },
  {
   "yaw": 179.93,
   "class": "AdjacentPanorama",
   "backwardYaw": 4.58,
   "panorama": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241",
   "distance": 1
  },
  {
   "yaw": 86.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 168.99,
   "panorama": "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B58A432_2AFB_ED82_418D_E0A9FE0BC354",
 "idleSequence": "this.sequence_3B58A432_2AFB_ED82_418D_E0A9FE0BC354",
 "id": "camera_3B589432_2AFB_ED82_41A1_674D785FABCD",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B7B440C_2AFB_ED86_41A2_D8126963FD6D",
 "idleSequence": "this.sequence_3B7B440C_2AFB_ED86_41A2_D8126963FD6D",
 "id": "camera_3B7B340C_2AFB_ED86_41C0_3AA353A07E90",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_camera",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 5",
 "hfovMin": "150%",
 "id": "panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42",
 "overlays": [
  "this.overlay_07FC945A_1365_A06B_416B_9F44E9446BB6",
  "this.overlay_0575A3D1_1365_6079_41B2_548EF7F4B9A9",
  "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 54.48,
   "class": "AdjacentPanorama",
   "backwardYaw": -99.55,
   "panorama": "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E",
   "distance": 1
  },
  {
   "yaw": -125.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -86.88,
   "panorama": "this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Pintu Masuk",
 "hfovMin": "150%",
 "id": "panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B",
 "overlays": [
  "this.overlay_0315FEEB_1364_A02A_4183_0B71F106AF1E",
  "this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -3.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.99,
   "panorama": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B614419_2AFB_ED8E_41B5_A8638B0E5291",
 "idleSequence": "this.sequence_3B614419_2AFB_ED8E_41B5_A8638B0E5291",
 "id": "camera_3B613419_2AFB_ED8E_41B8_5A15E9B62457",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 6",
 "hfovMin": "150%",
 "id": "panorama_18B2255E_12DD_2BF3_419D_6303738B1C53",
 "overlays": [
  "this.overlay_056C5D78_1364_A037_41AB_A6B157138838",
  "this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -86.88,
   "class": "AdjacentPanorama",
   "backwardYaw": -125.41,
   "panorama": "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_camera",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 3",
 "hfovMin": "150%",
 "id": "panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3",
 "overlays": [
  "this.overlay_0738E64C_1365_E06E_41B1_294341DE020D",
  "this.overlay_07F9F3E3_1365_A059_41A9_4121C9298D4F",
  "this.overlay_00BF8312_1364_A1FB_41A4_EBB54EE7B685",
  "this.overlay_33103CC0_272C_B266_41B9_E3D6EA1E150A",
  "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 87.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -6.03,
   "panorama": "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338",
   "distance": 1
  },
  {
   "yaw": -89.07,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.16,
   "panorama": "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E",
   "distance": 1
  },
  {
   "yaw": -1.6,
   "class": "AdjacentPanorama",
   "backwardYaw": 159.82,
   "panorama": "this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BAFC3CC_2AFB_EA86_41B1_7F8FF589472E",
 "idleSequence": "this.sequence_3BAFC3CC_2AFB_EA86_41B1_7F8FF589472E",
 "id": "camera_3BAFB3CC_2AFB_EA86_41B3_62D41D54CD7C",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 4",
 "hfovMin": "150%",
 "id": "panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E",
 "overlays": [
  "this.overlay_071596C6_137D_A05B_41A2_1A3634F5EEBD",
  "this.overlay_070D93A1_137D_E0D9_4173_AE9A194FA736",
  "this.overlay_07C13CD5_137B_6079_41AA_F77CF52853D9",
  "this.overlay_33A61884_2724_52EE_41BD_B4403DAD0FB8",
  "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 87.35,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.72,
   "panorama": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0",
   "distance": 1
  },
  {
   "yaw": -99.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 54.48,
   "panorama": "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B9883E5_2AFB_EA86_4189_C06E3E817001",
 "idleSequence": "this.sequence_3B9883E5_2AFB_EA86_4189_C06E3E817001",
 "id": "camera_3B9B73E5_2AFB_EA86_41A4_138CCAF0FE16",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B4CD43F_2AFB_ED82_41C1_FE12CB1E8307",
 "idleSequence": "this.sequence_3B4CD43F_2AFB_ED82_41C1_FE12CB1E8307",
 "id": "camera_3B4CC43F_2AFB_ED82_416A_971349C6A796",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BFF735A_2AFB_EB82_41C2_17D2710D73E1",
 "idleSequence": "this.sequence_3BFF735A_2AFB_EB82_41C2_17D2710D73E1",
 "id": "camera_3BFF635A_2AFB_EB82_41C2_0BA804B56A2B",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BEB6380_2AFB_EB7E_4193_F0D5C4DF4300",
 "idleSequence": "this.sequence_3BEB6380_2AFB_EB7E_4193_F0D5C4DF4300",
 "id": "camera_3BEB5380_2AFB_EB7E_41B6_3D6DD136D5C5",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 81.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BD0238D_2AFB_EA86_4182_AAAF08707F8A",
 "idleSequence": "this.sequence_3BD0238D_2AFB_EA86_4182_AAAF08707F8A",
 "id": "camera_3BD0038D_2AFB_EA86_418B_AE7111397122",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_camera"
  },
  {
   "media": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241_camera"
  },
  {
   "media": "this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_camera"
  },
  {
   "media": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_camera"
  },
  {
   "media": "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_camera"
  },
  {
   "media": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_camera"
  },
  {
   "media": "this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_camera"
  },
  {
   "media": "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_camera"
  },
  {
   "media": "this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_camera"
  },
  {
   "media": "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_camera"
  },
  {
   "media": "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_camera"
  },
  {
   "media": "this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_camera"
  },
  {
   "media": "this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B92E3D8_2AFB_EA8E_41C3_44EB89576BE1",
 "idleSequence": "this.sequence_3B92E3D8_2AFB_EA8E_41C3_44EB89576BE1",
 "id": "camera_3B92D3D8_2AFB_EA8E_419A_A906494FA18E",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BCDA3A6_2AFB_EA82_418C_1E81BB63ED95",
 "idleSequence": "this.sequence_3BCDA3A6_2AFB_EA82_418C_1E81BB63ED95",
 "id": "camera_3BCD93A6_2AFB_EA82_41BE_BD6735C84776",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 54.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B26745A_2AFB_ED82_41B9_FE28C73DF901",
 "idleSequence": "this.sequence_3B26745A_2AFB_ED82_41B9_FE28C73DF901",
 "id": "camera_3B26645A_2AFB_ED82_41C0_D4D14E184BA5",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_t.jpg",
 "hfovMin": "150%",
 "id": "panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1",
 "label": "Jadwal Commuter Line Merak_2_page-0001",
 "class": "Panorama",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Loket",
 "hfovMin": "150%",
 "id": "panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4",
 "overlays": [
  "this.overlay_03BAF054_136B_607F_4193_4DEC324259E0",
  "this.overlay_029645A4_136C_A0DF_4171_DA2ADE951BF6",
  "this.overlay_3314648E_2724_F2FA_41AD_AEF500A46793",
  "this.overlay_30A35EE8_2724_6E25_41AE_051348538B3D",
  "this.overlay_31A622DB_2724_761B_41BE_B2240B1FAA6A",
  "this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -179.95,
   "class": "AdjacentPanorama",
   "backwardYaw": -93.01,
   "panorama": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 2",
 "hfovMin": "150%",
 "id": "panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338",
 "overlays": [
  "this.overlay_00C48EA4_136B_E0DF_41AB_81DF129E6E2F",
  "this.overlay_00C13EEC_136B_602F_4184_B7990B6D7BD9",
  "this.overlay_338EBE47_272C_AE6B_41C2_504CBBB351FB",
  "this.overlay_31C8732B_272F_B63B_41BD_4DE1B1D31A6B",
  "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 168.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.76,
   "panorama": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0",
   "distance": 1
  },
  {
   "yaw": -6.03,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.26,
   "panorama": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BE0C373_2AFB_EB82_4197_A53C252958A7",
 "idleSequence": "this.sequence_3BE0C373_2AFB_EB82_4197_A53C252958A7",
 "id": "camera_3BE0B373_2AFB_EB82_41C2_3720065C1813",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 173.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BB223B3_2AFB_EA82_41B6_592BA428479A",
 "idleSequence": "this.sequence_3BB223B3_2AFB_EA82_41B6_592BA428479A",
 "id": "camera_3BB213B2_2AFB_EA82_41B6_AB979E5B2A32",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Lobi Stasiun",
 "hfovMin": "150%",
 "id": "panorama_188582C9_12DB_2ED0_41A2_3161167B8241",
 "overlays": [
  "this.overlay_016BABB4_1365_A03E_41B1_CD91C604571C",
  "this.overlay_02957084_1364_A0DF_4189_2EAD6A58BEB1",
  "this.overlay_011E23E4_136D_605E_41A2_0634F1D62F47",
  "this.overlay_021D3BE9_136C_A029_415F_39EFF4C7F7A6",
  "this.overlay_06BA6EC3_136C_A05A_41B2_D0CC04D6A0AD",
  "this.overlay_33C4C46D_2724_723E_41C2_AC54AA70CA24",
  "this.overlay_33CBBDC3_2727_B26B_41C1_C03091D47E6E",
  "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 4.58,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.93,
   "panorama": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0",
   "distance": 1
  },
  {
   "yaw": -93.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.95,
   "panorama": "this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4",
   "distance": 1
  },
  {
   "yaw": -179.99,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.71,
   "panorama": "this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Peron 4",
 "hfovMin": "150%",
 "id": "panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443",
 "overlays": [
  "this.overlay_060DD4E6_137F_605B_41AE_C82CCD8F556F",
  "this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -98.17,
   "class": "AdjacentPanorama",
   "backwardYaw": 95.27,
   "panorama": "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -125.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B555425_2AFB_ED86_4182_4B7958818D23",
 "idleSequence": "this.sequence_3B555425_2AFB_ED86_4182_4B7958818D23",
 "id": "camera_3B553425_2AFB_ED86_41B6_2CFEBD992A9F",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1",
   "player": "this.viewer_uid3F0E62DF_2AFB_EA82_418E_B945EFECE0DCPanoPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_camera"
  }
 ],
 "id": "playList_38EE6172_2AF9_2782_4197_954D2D27DE18",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3BE60367_2AFB_EB82_41B5_C06FC8D12D93",
 "idleSequence": "this.sequence_3BE60367_2AFB_EB82_41B5_C06FC8D12D93",
 "id": "camera_3BE6F367_2AFB_EB82_41C0_0B7D210BA677",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_camera",
 "timeToIdle": 5000
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Mushola",
 "hfovMin": "150%",
 "id": "panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586",
 "overlays": [
  "this.overlay_0701914E_1367_606B_41B2_5589B1C2F97F",
  "this.overlay_33A9CA9E_272D_F61D_41A6_09F26522CE07",
  "this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 159.82,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.6,
   "panorama": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B30E44C_2AFB_ED86_41B2_C57DE366BECB",
 "idleSequence": "this.sequence_3B30E44C_2AFB_ED86_41B2_C57DE366BECB",
 "id": "camera_3B30D44C_2AFB_ED86_41B4_18360CBE007C",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B7413FF_2AFB_EA82_41BF_5F8F93B28326",
 "idleSequence": "this.sequence_3B7413FF_2AFB_EA82_41BF_5F8F93B28326",
 "id": "camera_3B7403FF_2AFB_EA82_41C4_2FBEA23EA699",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_camera",
 "timeToIdle": 5000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_camera",
 "timeToIdle": 5000
},
{
 "items": [
  {
   "media": "this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_camera"
  },
  {
   "media": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241_camera"
  },
  {
   "media": "this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_camera"
  },
  {
   "media": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_camera"
  },
  {
   "media": "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_camera"
  },
  {
   "media": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_camera"
  },
  {
   "media": "this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_camera"
  },
  {
   "media": "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_camera"
  },
  {
   "media": "this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_camera"
  },
  {
   "media": "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_camera"
  },
  {
   "media": "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_camera"
  },
  {
   "media": "this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_camera"
  },
  {
   "media": "this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist, 12, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1_camera"
  }
 ],
 "id": "ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_3B8FA3F2_2AFB_EA82_41B3_4CAD197E00CD",
 "idleSequence": "this.sequence_3B8FA3F2_2AFB_EA82_41B3_4CAD197E00CD",
 "id": "camera_3B8F83F2_2AFB_EA82_41C2_D0AEDF7D8A20",
 "timeToIdle": 5000
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_331E8304_276B_F7ED_41AC_8248CEB6859C",
 "left": "36.55%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "overflow": "hidden",
 "width": "23.758%",
 "children": [
  "this.IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE",
  "this.IconButton_331F72FE_276B_F61A_41C2_5C258FB11721",
  "this.IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F",
  "this.IconButton_331F12FE_276B_F61A_41C1_4E3823931E39",
  "this.Container_331F32FE_276B_F61A_41AF_F761FE21373E",
  "this.IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226",
  "this.IconButton_331EC304_276B_F7ED_418C_C3184E7314BC",
  "this.IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "class": "Container",
 "bottom": "0.28%",
 "scrollBarWidth": 10,
 "minWidth": 20,
 "verticalAlign": "middle",
 "height": "18.64%",
 "gap": 4,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Container53059"
 },
 "layout": "horizontal"
},
{
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199",
 "backgroundOpacity": 0,
 "paddingLeft": 20,
 "itemBorderRadius": 0,
 "right": "0.9%",
 "width": 131,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "minHeight": 20,
 "itemPaddingLeft": 3,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "ThumbnailList",
 "itemOpacity": 1,
 "minWidth": 20,
 "playList": "this.ThumbnailList_336748D9_276C_B267_419D_DB5CD1716199_playlist",
 "verticalAlign": "top",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailOpacity": 1,
 "height": "38.486%",
 "itemBackgroundColor": [],
 "itemThumbnailShadowSpread": 1,
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "borderSize": 0,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "shadow": false,
 "itemThumbnailShadowOpacity": 0.54,
 "scrollBarColor": "#FFFFFF",
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#FFCC00",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 20,
 "itemThumbnailShadowBlurRadius": 8,
 "itemLabelFontSize": 14,
 "borderRadius": 5,
 "itemLabelGap": 9,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowVerticalLength": 3,
 "top": "0.22%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemHorizontalAlign": "center",
 "gap": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingBottom": 10,
 "layout": "vertical",
 "horizontalAlign": "left",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 50,
 "itemLabelFontFamily": "Arial"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BB923BF_2AFB_EA82_41C2_813BFACD7CAD",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.12,
   "yaw": -179.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 26.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6EEE8E_136B_A0EB_41B1_709A5F8868F8",
   "pitch": 26.74,
   "hfov": 9.12,
   "yaw": -179.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00C7D61E_137B_A3EA_417E_848953714D38",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.59,
   "yaw": -92.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3, this.camera_3BEB5380_2AFB_EB7E_41B6_3D6DD136D5C5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6E5E8E_136B_A0EB_41AE_AE945C3F7F9B",
   "pitch": -15.94,
   "hfov": 11.59,
   "yaw": -92.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00C5C48E_137D_60EB_41A7_D6C58FAD0457",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.95,
   "yaw": 95.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443, this.camera_3BD0038D_2AFB_EA86_418B_AE7111397122); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6D8E8E_136B_A0EB_41A7_4A54D010EB8E",
   "pitch": -22.3,
   "hfov": 11.95,
   "yaw": 95.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00FA4ADB_137D_A069_41A7_21DCDC84CACE",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.71,
   "yaw": -173.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0_HS_3_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 34.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_0_HS_3_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ]
   },
   "pitch": 34.48,
   "hfov": 20.71,
   "yaw": -173.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3381D4DD_272C_521F_41A9_AD22DB1546CC",
 "data": {
  "label": "Toilet"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BF3234E_2AFB_EB82_4198_5CD101F2D8AD",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "id": "IconButton_331F0304_276B_F7ED_41B5_815D876047E2",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F0304_276B_F7ED_41B5_815D876047E2_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F0304_276B_F7ED_41B5_815D876047E2_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F0304_276B_F7ED_41B5_815D876047E2.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53067"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53071"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F12FE_276B_F61A_41C1_4E3823931E39",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F12FE_276B_F61A_41C1_4E3823931E39_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F12FE_276B_F61A_41C1_4E3823931E39_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F12FE_276B_F61A_41C1_4E3823931E39.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53063"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331EC304_276B_F7ED_418C_C3184E7314BC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331EC304_276B_F7ED_418C_C3184E7314BC_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331EC304_276B_F7ED_418C_C3184E7314BC_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331EC304_276B_F7ED_418C_C3184E7314BC.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53069"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53068"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53062"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F72FE_276B_F61A_41C2_5C258FB11721",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F72FE_276B_F61A_41C2_5C258FB11721_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F72FE_276B_F61A_41C2_5C258FB11721_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F72FE_276B_F61A_41C2_5C258FB11721.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53061"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53060"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F1304_276B_F7ED_41BB_2BC0DB9FFF4A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F1304_276B_F7ED_41BB_2BC0DB9FFF4A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F1304_276B_F7ED_41BB_2BC0DB9FFF4A.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53066"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A_rollover.png",
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button53065"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "viewer_uid3F0E62DF_2AFB_EA82_418E_B945EFECE0DC",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "ViewerArea5787"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BD97399_2AFB_EA8E_41B8_C29B90FF27A5",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.96,
   "yaw": -93.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E, this.camera_3BF3134E_2AFB_EB82_41B9_EE10EDC118A3); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B690E8C_136B_A0EF_41A9_F45DC21DCBD1",
   "pitch": -7.69,
   "hfov": 7.96,
   "yaw": -93.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_02A380D5_136C_A07E_4191_FE51E9681E07",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.91,
   "yaw": 86.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338, this.camera_3BE6F367_2AFB_EB82_41C0_0B7D210BA677); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B689E8C_136B_A0EF_41A7_CA8B5271820E",
   "pitch": -10.2,
   "hfov": 7.91,
   "yaw": 86.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_004FFA0D_136D_A3E9_41AA_9B8058E91C2C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.07,
   "yaw": 179.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241, this.camera_3BFF635A_2AFB_EB82_41C2_0BA804B56A2B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B68CE8D_136B_A0E9_41AC_902D0DC55988",
   "pitch": -21.7,
   "hfov": 12.07,
   "yaw": 179.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_050EBFDF_1364_E069_41A9_F8A856E85094",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B58A432_2AFB_ED82_418D_E0A9FE0BC354",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B7B440C_2AFB_ED86_41A2_D8126963FD6D",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.94,
   "yaw": 54.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E, this.camera_3BD96399_2AFB_EA8E_41B5_D392AE8A0461); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6C2E8F_136B_A0E9_41B1_6D1D1867AE36",
   "pitch": -9.06,
   "hfov": 7.94,
   "yaw": 54.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07FC945A_1365_A06B_416B_9F44E9446BB6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.8,
   "yaw": -125.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B2255E_12DD_2BF3_419D_6303738B1C53, this.camera_3BCD93A6_2AFB_EA82_41BE_BD6735C84776); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B138E8F_136B_A0E9_4184_0AAFA5663961",
   "pitch": -13.82,
   "hfov": 7.8,
   "yaw": -125.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0575A3D1_1365_6079_41B2_548EF7F4B9A9",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.27,
   "yaw": -3.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241, this.camera_3B30D44C_2AFB_ED86_41B4_18360CBE007C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6B9E86_136B_A0DB_41A0_B49858E31952",
   "pitch": -18.28,
   "hfov": 12.27,
   "yaw": -3.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0315FEEB_1364_A02A_4183_0B71F106AF1E",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B614419_2AFB_ED8E_41B5_A8638B0E5291",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.93,
   "yaw": -86.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42, this.camera_3B26645A_2AFB_ED82_41C0_D4D14E184BA5); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B13FE8F_136B_A0E9_416B_971470795586",
   "pitch": -9.2,
   "hfov": 7.93,
   "yaw": -86.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_056C5D78_1364_A037_41AB_A6B157138838",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.15,
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586, this.camera_3BAFB3CC_2AFB_EA86_41B3_62D41D54CD7C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Mushola",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0_HS_0_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ]
   },
   "pitch": 7.84,
   "yaw": -1.6,
   "distance": 50
  }
 ],
 "id": "overlay_0738E64C_1365_E06E_41B1_294341DE020D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": 87.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338, this.camera_3BB213B2_2AFB_EA82_41B6_AB979E5B2A32); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6F0E8D_136B_A0E9_41A3_A92A8629B37A",
   "pitch": -17.6,
   "hfov": 7.66,
   "yaw": 87.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07F9F3E3_1365_A059_41A9_4121C9298D4F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.89,
   "yaw": -89.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E, this.camera_3BB913BF_2AFB_EA82_41A7_28D3C0ACDF39); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6F5E8D_136B_A0E9_41A6_79990D026BB4",
   "pitch": -11,
   "hfov": 7.89,
   "yaw": -89.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00BF8312_1364_A1FB_41A4_EBB54EE7B685",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.65,
   "yaw": -1.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0_HS_3_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_0_HS_3_0.png",
      "width": 149,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": 15.2,
   "hfov": 9.65,
   "yaw": -1.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33103CC0_272C_B266_41B9_E3D6EA1E150A",
 "data": {
  "label": "Mushola"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BAFC3CC_2AFB_EA86_41B1_7F8FF589472E",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.5,
   "yaw": -99.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42, this.camera_3B553425_2AFB_ED86_41B6_2CFEBD992A9F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6D5E8E_136B_A0EB_41AF_C9CFCA00E7B9",
   "pitch": -21.66,
   "hfov": 9.5,
   "yaw": -99.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_071596C6_137D_A05B_41A2_1A3634F5EEBD",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.85,
   "yaw": -117.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Pengatur Perjalanan KA",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_39EF88CD_272C_B27F_41B3_51049AFAB786",
   "pitch": 6.61,
   "hfov": 2.85,
   "yaw": -117.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_070D93A1_137D_E0D9_4173_AE9A194FA736",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.7,
   "yaw": 87.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0, this.camera_3B613419_2AFB_ED8E_41B8_5A15E9B62457); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6CEE8F_136B_A0E9_41B0_1A543866A267",
   "pitch": -16.53,
   "hfov": 7.7,
   "yaw": 87.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07C13CD5_137B_6079_41AA_F77CF52853D9",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.07,
   "yaw": -116.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0_HS_3_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0_HS_3_0.png",
      "width": 364,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": 9.86,
   "hfov": 24.07,
   "yaw": -116.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33A61884_2724_52EE_41BD_B4403DAD0FB8",
 "data": {
  "label": "Ruang Pengatur Perjalanan"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B9883E5_2AFB_EA86_4189_C06E3E817001",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B4CD43F_2AFB_ED82_41C1_FE12CB1E8307",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BFF735A_2AFB_EB82_41C2_17D2710D73E1",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BEB6380_2AFB_EB7E_4193_F0D5C4DF4300",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BD0238D_2AFB_EA86_4182_AAAF08707F8A",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B92E3D8_2AFB_EA8E_41C3_44EB89576BE1",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BCDA3A6_2AFB_EA82_418C_1E81BB63ED95",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B26745A_2AFB_ED82_41B9_FE28C73DF901",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 6.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 22.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loket",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3FCA7D07_2724_73EB_41C1_68C8BF32E008",
   "pitch": 22.93,
   "hfov": 6.03,
   "yaw": 6.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_03BAF054_136B_607F_4193_4DEC324259E0",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_188582C9_12DB_2ED0_41A2_3161167B8241, this.camera_3BE0B373_2AFB_EB82_41C2_3720065C1813); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B69DE8C_136B_A0EF_4148_138A0EC48AEC",
   "pitch": -20.3,
   "hfov": 7.54,
   "yaw": -179.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_029645A4_136C_A0DF_4171_DA2ADE951BF6",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.3,
   "yaw": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_2_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_2_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ]
   },
   "pitch": 28.6,
   "hfov": 7.3,
   "yaw": 7.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3314648E_2724_F2FA_41AD_AEF500A46793",
 "data": {
  "label": "Loket"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.52,
   "yaw": -109.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 23.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupMedia(this.window_3375A0D7_272C_B26B_41AF_FDF428F23B42, this.panorama_328CFAF6_272C_D62A_41C0_7505D650C7E1, this.playList_38EE6172_2AF9_2782_4197_954D2D27DE18, '90%', '90%', false, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Loket",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3FCB0D08_2724_73E5_41C0_F56376F755FD",
   "pitch": 23.5,
   "hfov": 4.52,
   "yaw": -109.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30A35EE8_2724_6E25_41AE_051348538B3D",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.08,
   "yaw": -107.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_4_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 27.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_4_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": 27.5,
   "hfov": 14.08,
   "yaw": -107.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31A622DB_2724_761B_41BE_B2240B1FAA6A",
 "data": {
  "label": "Info Jadwal"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.88,
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3, this.camera_3B4CC43F_2AFB_ED82_416A_971349C6A796); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B680E8D_136B_A0E9_4133_EF19C3075580",
   "pitch": -11.47,
   "hfov": 7.88,
   "yaw": -6.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00C48EA4_136B_E0DF_41AB_81DF129E6E2F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 168.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0, this.camera_3B589432_2AFB_ED82_41A1_674D785FABCD); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B687E8D_136B_A0E9_41A1_F6D9941FBD61",
   "pitch": -20.66,
   "hfov": 7.52,
   "yaw": 168.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00C13EEC_136B_602F_4184_B7990B6D7BD9",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.93,
   "yaw": 73.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3FCD4D0B_2724_73FB_41C0_36E391EEFB98",
   "pitch": 15.76,
   "hfov": 4.93,
   "yaw": 73.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_338EBE47_272C_AE6B_41C2_504CBBB351FB",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.53,
   "yaw": 74.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0_HS_3_0_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0_HS_3_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": 20.54,
   "hfov": 23.53,
   "yaw": 74.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31C8732B_272F_B63B_41BD_4DE1B1D31A6B",
 "data": {
  "label": "Ruang Kepala Stasiun"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BE0C373_2AFB_EB82_4197_A53C252958A7",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BB223B3_2AFB_EA82_41B6_592BA428479A",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.88,
   "yaw": -93.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4, this.camera_3B7403FF_2AFB_EA82_41C4_2FBEA23EA699); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6B6E86_136B_A0DB_419F_EC0A0E9736FA",
   "pitch": -11.33,
   "hfov": 7.88,
   "yaw": -93.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_016BABB4_1365_A03E_41B1_CD91C604571C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.62,
   "yaw": -179.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B, this.camera_3B7B340C_2AFB_ED86_41C0_3AA353A07E90); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6AAE86_136B_A0DB_41A3_FFFDA1E13709",
   "pitch": -18.03,
   "hfov": 6.62,
   "yaw": -179.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_02957084_1364_A0DF_4189_2EAD6A58BEB1",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.82,
   "yaw": 4.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0, this.camera_3B8F83F2_2AFB_EA82_41C2_D0AEDF7D8A20); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6AEE86_136B_A0DB_4157_9A7E41A228FC",
   "pitch": -23.8,
   "hfov": 11.82,
   "yaw": 4.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_011E23E4_136D_605E_41A2_0634F1D62F47",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.81,
   "yaw": 95.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ruang Tunggu dan Papan Informasi",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3FCA8D07_2724_73EB_41C1_C16EC8F5333D",
   "pitch": 2.86,
   "hfov": 3.81,
   "yaw": 95.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_021D3BE9_136C_A029_415F_39EFF4C7F7A6",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.37,
   "yaw": 53.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.openLink('https://commuterline.id/perjalanan-krl/peta-rute', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Rute Perjalanan",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_3FCACD07_2724_73EB_41AB_7D6637801FC8",
   "pitch": 10.22,
   "hfov": 3.37,
   "yaw": 53.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_06BA6EC3_136C_A05A_41B2_D0CC04D6A0AD",
 "data": {
  "label": "Info 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.49,
   "yaw": 56.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_6_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_6_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": 13.87,
   "hfov": 14.49,
   "yaw": 56.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33C4C46D_2724_723E_41C2_AC54AA70CA24",
 "data": {
  "label": "Info Rute"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.83,
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_7_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_7_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 46
     }
    ]
   },
   "pitch": 6.43,
   "hfov": 14.83,
   "yaw": 96.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33CBBDC3_2727_B26B_41C1_C03091D47E6E",
 "data": {
  "label": "Ruang Tunggu"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_188582C9_12DB_2ED0_41A2_3161167B8241_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.43,
   "yaw": -98.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E, this.camera_3B9B73E5_2AFB_EA86_41A4_138CCAF0FE16); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_0B6D1E8E_136B_A0EB_41B2_2F02E5A510F7",
   "pitch": -15.76,
   "hfov": 12.43,
   "yaw": -98.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_060DD4E6_137F_605B_41AE_C82CCD8F556F",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B555425_2AFB_ED86_4182_4B7958818D23",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "displayPlaybackBar": true,
 "buttonMoveDown": "this.IconButton_331F0304_276B_F7ED_41B5_815D876047E2",
 "buttonZoomIn": "this.IconButton_331EE304_276B_F7ED_41C1_E04048E1C36A",
 "viewerArea": "this.viewer_uid3F0E62DF_2AFB_EA82_418E_B945EFECE0DC",
 "buttonMoveLeft": "this.IconButton_331F12FE_276B_F61A_41C1_4E3823931E39",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "buttonPlayRight": "this.IconButton_331EC304_276B_F7ED_418C_C3184E7314BC",
 "buttonMoveRight": "this.IconButton_331F2304_276B_F7ED_41BF_7B7485ED9226",
 "buttonPlayLeft": "this.IconButton_331F62FE_276B_F61A_41C0_D8318ACEDF1F",
 "id": "viewer_uid3F0E62DF_2AFB_EA82_418E_B945EFECE0DCPanoPlayer",
 "class": "PanoramaPlayer",
 "buttonRestart": "this.IconButton_331F72FE_276B_F61A_41C2_5C258FB11721",
 "buttonZoomOut": "this.IconButton_331F42FE_276B_F61A_41B1_69128F8AFEEE",
 "buttonPause": "this.IconButton_331F1304_276B_F7ED_41BB_2BC0DB9FFF4A",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveUp": "this.IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3BE60367_2AFB_EB82_41B5_C06FC8D12D93",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.66,
   "yaw": 159.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -0.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3, this.camera_3B92D3D8_2AFB_EA8E_419A_A906494FA18E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Keluar Mushola",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0_HS_0_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "pitch": -0.69,
   "yaw": 159.82,
   "distance": 50
  }
 ],
 "id": "overlay_0701914E_1367_606B_41B2_5589B1C2F97F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.5,
   "yaw": 164.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0_HS_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_0_HS_1_0.png",
      "width": 248,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ]
   },
   "pitch": 6.97,
   "hfov": 16.5,
   "yaw": 164.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33A9CA9E_272D_F61D_41A6_09F26522CE07",
 "data": {
  "label": "Keluar"
 }
},
{
 "inertia": false,
 "hfov": 45,
 "class": "TripodCapPanoramaOverlay",
 "distance": 50,
 "rotate": false,
 "id": "panorama_18ABE8F2_12DB_3AB0_41A2_00034B4D2586_tcap0",
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ]
 }
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B30E44C_2AFB_ED86_41B2_C57DE366BECB",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B7413FF_2AFB_EA82_41BF_5F8F93B28326",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_3B8FA3F2_2AFB_EA82_41B3_4CAD197E00CD",
 "class": "PanoramaCameraSequence",
 "restartMovementOnUserInteraction": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_331F32FE_276B_F61A_41AF_F761FE21373E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "hidden",
 "width": 40,
 "children": [
  "this.IconButton_331F22FE_276B_F61A_41C0_1DAEBCB1947A",
  "this.IconButton_331F1304_276B_F7ED_41BB_2BC0DB9FFF4A",
  "this.IconButton_331F0304_276B_F7ED_41B5_815D876047E2"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "minWidth": 20,
 "verticalAlign": "middle",
 "height": "100%",
 "borderSize": 0,
 "gap": 4,
 "paddingTop": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Container53064"
 },
 "layout": "vertical"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_1_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_0B6EEE8E_136B_A0EB_41B1_709A5F8868F8",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_0B6E5E8E_136B_A0EB_41AE_AE945C3F7F9B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B22DBA_12DA_DAB0_41A3_AC0CC936EE3E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6D8E8E_136B_A0EB_41A7_4A54D010EB8E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B690E8C_136B_A0EF_41A9_F45DC21DCBD1",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B689E8C_136B_A0EF_41A7_CA8B5271820E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B7F4AE_12DB_6950_4175_F9479F4D2DA0_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B68CE8D_136B_A0E9_41AC_902D0DC55988",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6C2E8F_136B_A0E9_41B1_6D1D1867AE36",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B51CE9_12DA_DAD0_41AF_38E8475F1A42_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B138E8F_136B_A0E9_4184_0AAFA5663961",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_19A1ED4A_12DB_3BD3_41B2_564B2301B84B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6B9E86_136B_A0DB_41A0_B49858E31952",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B2255E_12DD_2BF3_419D_6303738B1C53_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B13FE8F_136B_A0E9_416B_971470795586",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6F0E8D_136B_A0E9_41A3_A92A8629B37A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B51CE9_12DB_5AD1_41AE_D9872DA598D3_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6F5E8D_136B_A0E9_41A6_79990D026BB4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6D5E8E_136B_A0EB_41AF_C9CFCA00E7B9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_39EF88CD_272C_B27F_41B3_51049AFAB786",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18AB62B3_12DA_EEB0_41AA_D3C70EBD428E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6CEE8F_136B_A0E9_41B0_1A543866A267",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3FCA7D07_2724_73EB_41C1_68C8BF32E008",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B69DE8C_136B_A0EF_4148_138A0EC48AEC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B03CB9_12DB_5AB1_419B_C2FBCF2717C4_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3FCB0D08_2724_73E5_41C0_F56376F755FD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B680E8D_136B_A0E9_4133_EF19C3075580",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B687E8D_136B_A0E9_41A1_F6D9941FBD61",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18AB7FB2_12DB_76B0_41A4_F44C133F7338_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3FCD4D0B_2724_73FB_41C0_36E391EEFB98",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6B6E86_136B_A0DB_419F_EC0A0E9736FA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6AAE86_136B_A0DB_41A3_FFFDA1E13709",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6AEE86_136B_A0DB_4157_9A7E41A228FC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3FCA8D07_2724_73EB_41C1_C16EC8F5333D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_188582C9_12DB_2ED0_41A2_3161167B8241_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_3FCACD07_2724_73EB_41AB_7D6637801FC8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18B6194E_12DA_FBD0_419D_0C14A72AB443_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_0B6D1E8E_136B_A0EB_41B2_2F02E5A510F7",
 "rowCount": 6,
 "frameCount": 24
}],
 "minWidth": 20,
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Player445"
 },
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } }
 },
 "gap": 10,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
