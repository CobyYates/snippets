import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    docs: [
      {
        title: "Buttons",
        details: [
          {
            type: "Primary",
            details: "Used for main buttons and save buttons",
            code: `<button class="btn btn-primary"></button>`,
          },
          {
            type: "Secondary",
            details: "Used for cancel buttons and cancel buttons",
            code: `<button class="btn btn-secondary btn-sm"></button>`,
          },
          {
            type: "Delete",
            details:
              "Used for delete buttons. This includes the SVG delete icon that is saved in the database",
            code: `<button class="btn btn-light">
  <%: Html.TranslateTag("Delete","Delete")%>
  <%=Html.GetThemedSVG("delete") %>
</button>`,
          },
        ],
      },
      {
        title: "Modal",
        details: [
          {
            type: "Full Example",
            details:
              "Full example of a Modal that will delete a Gateway and redirect the user to /Overview if successful",
            code: `function removeGateway(item) {
  let values = {};
  values.url = '/CSNet/Remove/GatewayID';
  values.redirect = '/Overview';
  values.text =
    "Are you sure you want to remove this gateway from the network?";
  openConfirm(values);
}`,
          },
          {
            type: "openConfirm(values);",
            details: "Method call to start modal",
            code: `openConfirm{}`,
          },
          {
            type: ".url",
            details: "Post URL",
            code: "values.url = '/Overview/GatewayFirmwareUpdate?id=${GatewayID}&url=${returnUrl}';",
          },
          {
            type: ".text",
            details: "Text to display",
            code: `values.text ='<%: Html.TranslateTag("Are you sure you want to update this gateway?","Are you sure you want to update this gateway?")%>';`,
          },
          {
            type: ".redirect",
            details: "URL if post success will redirect user",
            code: "values.redirect = `/Overview/GatewayIndex`;",
          },
          {
            type: ".partialTag",
            details: "HTML attribute which will load partial upon success",
            code: "values.partialTag = $('#gatewayEdit_<%:Model.GatewayID %>').parent();",
          },
          {
            type: ".btnText",
            details: "Text for the confirm button",
            code: `values.partialTag = "Ok";`,
          },
        ],
      },
    ],
    snippets: [
      {
        title: "Page Structure",
        code: `//Wrap parent element for each page in a container-fluid wrapper
<div class="container-fluid">

  //Full Width Panel
  <div class="x_panel col-md-12 shadow-sm rounded">
    <div class="card_container__top">
      <div class="card_container__top__title">
        <%: Html.TranslateTag("","")%>
      </div>
    </div>
  </div>

  //Half Width Panels START
  <div class="x_panel col-md-6 pe-md-3 mb-4 shadow-sm rounded">
    <div class="card_container__top">
      <div class="card_container__top__title">
        <%: Html.TranslateTag("","")%>
      </div>
    </div>
  </div>

  <div class="x_panel col-md-6 ps-md-3 shadow-sm rounded">
    <div class="card_container__top">
      <div class="card_container__top__title">
        <%: Html.TranslateTag("","")%>
      </div>
    </div>
  </div>
  //Half Width Panels FINISH

</div>`,
        id: 0,
        image:
          "https://lh5.googleusercontent.com/PlByMqhOdqbtb9B-6EORBkWUXMN8Soo_6IHCK6frA6ptC2BRVWaYeGYXxEcTru9f4GHRds317kDdc5M-to3OuWF0s5m6K2L8kqSXGclLyYL_anYSqNV8KTpFdDhce37UQQ=w740",
        imageHeight: "150",
        details: `Notice the column widths and padding (pe-md-3). On <a target="_blank" href="https://getbootstrap.com/docs/5.1/utilities/spacing/#notation">Bootstraps medium CSS media query</a>, the panel will have padding on the right side of the panel to create consistent spacing.
        between it and the panel to it's right. The same thing will happen to the panel on the right but the padding will be on the left. The <strong>mb-4</strong> is for the vertical spacing between panels. If you put it on the left panel in a double 6 column it will autmatically add
        the correct spacing.`,
        show: false,
      },
      {
        title: "SVG's",
        code: `<%=Html.GetThemedSVG("") %>`,
        id: 0,
        image:
          "https://lh3.googleusercontent.com/DNyqBNviB5w8-2Irx4Ju-8nJqaz8oWcVABZ11E0ZCkhgMSf-OXBsHVWV7vlctoqGYOa8_LP1-2Kbnt2v_aSNmyjDL6rUPt-76wC0VUI6P_Po4S6kLxTbxhPTar8Fh96hCQ=w166",
        imageHeight: "50",
        details: `SVG's must be uploaded through <strong>Admin > Portal > System Icons</strong>`,
        show: false,
      },
      {
        title: "Loading Buttons",
        code: `<button class="btn btn-primary" id="saving" style="display:none;" type="button" disabled >
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Saving...
</button>`,
        id: 0,
        image:
          "https://lh3.googleusercontent.com/pMODvL8pfnfYfawwm771O4A7VQbBSci45MFJyNI2yHL24psbsELLHaw-dCUrV76PSqPY1cheirg8dLY0ZIRM6t6So_oOAHM5LTdEDwVc-hqPiPH6TLLy0YGHkRQW6tmwQw=w112",
        imageHeight: "50",
        details: `Use this when the page is taking time to load after user input. It is set to hide at default and will need jQuery/JS in order to show the button and replace the first button user presses.`,
        show: false,
      },
      {
        title: "Toggle Switch",
        code: `<div class="form-check form-switch d-flex align-items-center ps-0">
  <label class="form-check-label"><%: Html.TranslateTag("Off","Off")%></label>
  <input class="form-check-input my-0 y-0 mx-2" type="checkbox" />
  <label class="form-check-label"><%: Html.TranslateTag("On","On")%></label>
</div>`,
        id: 0,
        image:
          "https://lh5.googleusercontent.com/8EXzu75sS0iz4ujwuU7qKdmThncxW43y7xamVYhQqlCVrhZNfLmqQhwGvsdxDESEe02FMccSBgwsua6RawCM_IdO27mjKko1dU9H3ajQoZ530ZzOJgbIIjAJaKKmAbawmw=w94",
        imageHeight: "50",
        details: `Use this when the page is taking time to load after user input. It is set to hide at default and will need jQuery/JS in order to show the button and replace the first button user presses.`,
        show: false,
      },
      {
        title: "Form Element w/ Label",
        code: `<div class="row sensorEditForm">
  <div class="col-12 col-md-3">
    <%: Html.TranslateTag("","")%>
  </div>
  <div class="col sensorEditFormInput">
    <input class="form-control" />
  </div>
</div>`,
        id: 0,
        image:
          "https://lh4.googleusercontent.com/RojdNw01CakMwiSWzNp2GEy7UKbZXsft2QYcMFqufogXT9Olv_6IidIRoElxltuOY2cAouCVN3Yq04ySBnDMriT6tx-rzsYxOS1p2CkU80SBN4kd0zvlGtaw79JknFI7cA=w423",
        imageHeight: "50",
        details: `For <strong>most</strong> form elements that need to be resonsive. This sets a fixed width to the input/select as well.`,
        show: false,
      },
      {
        title: "Form Group",
        code: `<div class="input-group mb-0">
    <input id="***" name="***" type="text" class="form-control me-0" value="***">
    <button class="btn btn-primary" title="***" id="***" value="***" style="cursor: pointer;">
    </button>
 </div>`,
        id: 0,
        image:
          "https://lh6.googleusercontent.com/vBY01nWoF4Fhpgy_YsD5WzVK_UMJWen2YksOaXAmfuqG98w7CTxmglIyke8Lml2Wa54REqycJ3m4H0yZWLgweBC5Ps9ZhVjOmQ84bGgRq0htkotTUXzsq-kSkrGTnvd3BQ=w322",
        imageHeight: "50",
        details: `For <strong>most</strong> form elements that need to be resonsive. This sets a fixed width to the input/select as well.`,
        show: false,
      },
      {
        title: "Form Element Types",
        code: `//Inputs
<input class="form-control">
//Selects
<select class="form-select">
//Checkboxes
<label class="form-check-label">
`,
        id: 0,
        image:
          "https://lh4.googleusercontent.com/a320Ehs4zLnjtE49e-0pgHEvCkpzaxZmzhtBk1eaKAkWyhKpGXYd0BJMcP41wrwGlBl3GMoI2W93HqkxcXDXY0vqS2BFeqHVzcpOrGit6BV6FL5rB7kasNcJW90bHB-ZeQ=w262",
        imageHeight: "100",
        details: `For inputs and selects, use the default styles from Bootstrap 5.0`,
        show: false,
      },
      {
        title: "Modal",
        code: `
function removeGateway(item) {
    let values = {};
    values.url = "/CSNet/Remove/GatewayID";
    values.text =
      'Are you sure you want to remove this gateway from the network?';
    openConfirm(values);
}`,
        id: 0,
        image:
          "https://lh4.googleusercontent.com/eRKJ1mHXm8hA-92pSUUDwkc-t-BLcWxbNuTtiMcLCL3FVYuFBfQRzL4S33ySJd2vwPtSiFiYyETy4uoqFsTqHgljQzkZWBGpqd_-M-SP_XZsLbGM7mJbISgiRAV68MrwgQ=w507",
        imageHeight: "150",
        details: `Instead of using Confirm or alert, use the modal. This one is for removing a Gateway and not redirecting the user if they confirm. See <a href="/docs"><strong>documentation</strong></a>
         to see other options for the Modal.`,
        show: false,
      },
      {
        title: "Panels",
        code: `<div class="x_panel col-md-12 shadow-sm rounded">
  <div class="card_container__top">
    <div class="card_container__top__title">
      <%: Html.TranslateTag("","")%>
    </div>
  </div>
</div>`,
        id: 0,
        image:
          "https://lh5.googleusercontent.com/klPjKZGJ6MGYAl1XH6nxq3Obq8VBhKKSNkT2Ch2_le1HNhjDEmybkeiuRHanHtusg8xTaw-vKdpTjfYSEMUXZ5_CpiSf9QhTGS0Zy5-M5YwxLb9CHM33qg9-jvXs5M8Y7w=w478",
        imageHeight: "150",
        details:
          "For sections of the page where you need a card type of layout. Includes a title, the hr and the drop shadow as well.",
        show: false,
      },
      {
        title: "Menus",
        code: `<div style="padding: 5px 15px" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" >
    <%=Html.GetThemedSVG("menu") %>
  </div>
<ul class="dropdown-menu shadow rounded" style="padding: 0">
  <li>
    <a class="dropdown-item menu_dropdown_item" href="">
      <span><%: Html.TranslateTag("***", "***")%></span>
      <%=Html.GetThemedSVG("***") %>
    </a>
  </li>
</ul>`,
        id: 0,
        image:
          "https://lh5.googleusercontent.com/QwwBf0BoJVlI486xxlS8KGsYDE5E1mkq974tZ2KCrPNfsQLaV9-hpgMci8kUKdGEWZI3ZSedmA9Pxzl9bvuMQk1aLV1IuSgwY1tEXZVMczG7TpFC1mlUzMysqePdkS3xfg=w168",
        imageHeight: "150",
        details:
          "For sections of the page where you need a card type of layout. Includes a title, the hr and the drop shadow as well.",
        show: false,
      },
      {
        title: "Scrolling",
        code: `//Parent div for smaller panels
<div class="x_panel shadow-sm rounded scrollParentSmall">
//Child element that has scroll
  <div class="hasScroll-sm">
  </div>
</div>

//Parent div for larger panels
<div class="x_panel shadow-sm rounded scrollParentLarge">
//Child element that has scroll
  <div class="hasScroll">
  </div>
</div>`,
        id: 0,
        image:
          "https://lh4.googleusercontent.com/8hgpvcb5xkhpccWC7C-rFDlZYLeaV7_WiJ0NJU1_kjAgGqCPQT5YVuWDuynVwqYWWkS_NCV7kqKDyZXeSF6-s00fhaAQmtS-9mZKJxqUkxHCtS2kW4bavKiHRKHTSzVhOQ=w469",
        imageHeight: "150",
        details:
          `This is for sections of the page that need to have the scrollbar. It has a hover feature where the scrollbar only shows when the user hovers. There is a large version 
          and small version. This can be a pain and for certain elements, this might need to be modified on the pages local CSS.`,
        show: false,
      },
      {
        title: "Panel with Details Cards",
        code: `//Just need to add the asp.net logic to this code for the Foreach
<div id="Main" class="sensorList_main row p-2 mx-auto mx-md-0">
  <div style="height: 80px" class="gridPanel eventsList shadow-sm mx-1 rounded" id="***" >
    <div style="height: inherit; width: 100%">
      <div style="height: inherit" class="eventsList__tr innerCard-holder">
      
        //START Foreach
        <a style="height: inherit; width: 100%; display: flex" href="***" >
          //Card Detils and information
        </a>
        //End Foreach
        
      </div>
    </div>
  </div>
</div>`,
        id: 0,
        image:
          "https://lh6.googleusercontent.com/VaI41oYmZiREcVRCg4bWTT4V9lJ9li2ypUVCgIJ-KJmGMp8Bl7X3qTbzHq0JEtH0WVT7CumQt34vEEy86DyBgB-mx8bc-ktYUZsxsuXrolleRercIqxW9YaCICITPGJhhw=w740",
        imageHeight: "150",
        details:
          `For these cards, the most important thing is that the classes are there. Mainly the <strong>shadow-sm mx-1 rounded</strong>. The mx-1 gives all the cards the correct spacing.
           The rest of the details card is original and didn't have any changes. Look for <strong>/Views/Overview/_SensorDetails</strong> for more code to follow.`,
        show: false,
      },
      {
        title: "Login Pages",
        code: `<div class="login_form_container">
  <div class="login_logo_container text-center">
      <div class="login_form">
          //Form
      </div>
  </div>
  <div class="login_image">
      <img src="../../Content/images/login-dashPhone.png" style="width: 100%;">
  </div>
 </div>`,
        id: 0,
        image:
          "https://lh4.googleusercontent.com/LdWlp-mJp2c3YdfSfH4KVGGno-PRkAxt5zAiGMgVs0pR0Kuye8T1GRozxr3FrWrVTW8iG-Ai2Jr9F8c6joPQLFBii-TMYn7AyJSGOSNohk8rucgK-EOfrAIDcojHJXTTcQ=w740",
        imageHeight: "150",
        details:
          `Code for the login pages.`,
        show: false,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
