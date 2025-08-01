console.log('*** Experiment started ***')

// Config for Experiment
const config = {
  // dir: 'https://kostyantynvernik.github.io/cadence-education',
  dir: 'https://kostyantynvernik.github.io/cadence-education',
  clarity: ['set', 'trial_exp', 'variant_1'],
  debug: false // Set to true for debug mode
}

// const orig = console.log
// console.log = function (...args) {
//   orig.apply(console, ['Debug:', ...args])
// }

// Styles for Experiment
const styles = /* css */ `
@media screen and (max-width: 600px){
#wrp1 .flex_column {position: revert;}
#wrap_all {margin-top: -35px;}
.mobshow {width: 100%;background: white;text-align: center;padding: 20px;}
.mobshow span {box-sizing: border-box;
padding: 12px 20px;
background: #2B6A39;
border: 2px solid #2B6A39;
border-radius: 2px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color: #FFFFFF;
cursor:pointer;
}
 .mobile-header{margin-top: 2px;}

#popup1 .search-outer ul li {padding: 5px 0px 5px 20px!important;}
#popup1 .search-outer ul li::before {left: 0!important;right: auto!important}
#popup1 .search-outer ul li::after {left: 0!important;right: auto!important}

.mobvip {cursor:pointer;}
#popup1 .search-placeholder {display:none;}
.mainsearch-outer {display:none!important;}
#popup1 .cd-programs-filter {display: block!important;border: none;box-shadow: none;position: relative!important;}
.entry-content-wrapper {margin-top:25px!important;}
#find-school-banner {display:none!important;}
#popup1 .content {width: 100%;
display: block;
height: 500px;
padding: 10px 0;}

.closescreen {right: 15px;position: absolute;top: 20px;z-index: 9999999;cursor:pointer;}
.form-box #cd-location-results {top: 70px!important;}
h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  align-items: center;
  text-align: center !important;
  text-transform: uppercase !important;
  color: #212021 !important;
}
.av-kljzgm9q-5d3f88e85b80e7ceac3de1473140072f p {font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
align-items: center;
text-align: center !important;
color: #666666;}

main.template-page {
justify-content: center;
align-items: center;
padding: 40px 135px;
background: linear-gradient(0deg, #EDF7F0, #EDF7F0), #FFFFFF;
}
#after_section_1,#main-search-block {background: linear-gradient(0deg, #EDF7F0, #EDF7F0), #FFFFFF;}
#after_section_1 .template-page {padding:0;margin-top: 25px;}

#wrp1 {background:white;padding: 30px 15px 0px 15px;}
#wrp1 .entry-content-wrapper {max-width:1170px;margin:60px auto;}
#main-search-block 
.find-school-section-home {box-shadow: none!important;}
.find-school-form .mobile-hide {font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
align-items: center;
text-transform: capitalize;
color: #666666;
}
#main-search-block .template-page {padding-bottom: 0px!important;}
.form-box .search-placeholder {font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
align-items: center;
color: #666666;
}
.find-school-section-home {background: transparent!important;}
.form-box{position:relative;}
#top #wrap_all .main_color .find-school-subpage.find-school-section-home {padding-bottom: 0px!important;}
#school-locations-map {
margin: 0 auto;
box-shadow: none;
display: block !important;
height: 160px;
margin: -30px;
}
#school-locations-map > div:first-child {
height: 100px !important;
width: 100% !important;
}
.list-pagination-wrap {margin-top:50px;}
#main-search-block .container {max-width: 100%!important;width: 100%!important;}
.find-school-section-home {margin: 0!important;padding: 0!important;}
.find-school-form {max-width: 800px!important;margin: 0 auto 50px auto!important;}
#top #wrap_all .main_color .find-school-section-home input,.form-box .search-placeholder {height: 43px!important;}
.cd-locations-continer {background:white;}
.form-box .getmylocation {right: 8px!important;top: 25px!important;}
.find-school-form .mobile-hide {display:block!important;}
.av-section-cont-open {padding: 0!important;}
.find-school-form {padding: 0 30px!important;margin-bottom: 20px !important;}

.cd-locations-continer{padding: 30px!important;}
.search-meta-info {display: none !important;}
.logo-wrapper-column {display: block!important;margin-bottom: 20px!important;}
.school-distance {display:none!important;}
body .school-results-list-wrapper .school-results-list-item {padding: 16px!important;
background: #FFFFFF!important;
box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.08)!important;
border-radius: 5px!important;
}
.button-wrapper-column .button {box-sizing: border-box;
padding: 12px 10px;
border-radius: 2px;
line-height: 17px;
font-size: 13px;}
.list-pagination-wrap {color: black;}




.overlay {
  position: absolute;
  top: -185px;
  bottom: 0;
  left: 0;
  right: 0;

  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
}
.header-mobile-bar  {display:none!important;}
.overlaytarget {
  visibility: visible!important;
  opacity: 1!important;
  z-index:9999!important;
}





}


@media screen and (min-width: 601px){
.entry-content-wrapper {margin-top:25px!important;}
#find-school-banner {display:none!important;}
h1 {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  align-items: center;
  text-align: center !important;
  text-transform: uppercase !important;
  color: #212021 !important;
}
.av-kljzgm9q-5d3f88e85b80e7ceac3de1473140072f p {font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
align-items: center;
text-align: center !important;
color: #666666;}

main.template-page {
justify-content: center;
align-items: center;
padding: 40px 135px;
background: linear-gradient(0deg, #EDF7F0, #EDF7F0), #FFFFFF;
}
#after_section_1,#main-search-block {background: linear-gradient(0deg, #EDF7F0, #EDF7F0), #FFFFFF;}
#after_section_1 .template-page {padding:0;margin-top: 25px;}

#wrp1 {background:white;padding-top: 30px;}
#wrp1 .entry-content-wrapper {max-width:1170px;margin:60px auto;}
#main-search-block 
.find-school-section-home {box-shadow: none!important;}
.find-school-form .mobile-hide {font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
align-items: center;
text-transform: capitalize;
color: #666666;
}
#main-search-block .template-page {padding-bottom: 0px!important;}
.form-box .search-placeholder {font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
align-items: center;
color: #666666;
}

.mainsearch-outer .search-placeholder {display:none!important;}


.find-school-section-home {background: transparent!important;}
.form-box{position:relative;}
#top #wrap_all .main_color .find-school-subpage.find-school-section-home {padding-bottom: 0px!important;}
#school-locations-map {max-height: 170px;
max-width: 1200px;
margin: 0 auto;
box-shadow: none;}
#school-locations-map > div:first-child {margin-left: 430px!important;}
#main-search-block .container {max-width: 100%!important;width: 100%!important;}
.find-school-section-home {margin: 0!important;padding: 0!important;}
.find-school-form {max-width: 800px!important;margin: 0 auto 50px auto!important;}
#top #wrap_all .main_color .find-school-section-home input,.form-box .search-placeholder {height: 43px!important;}
.cd-locations-continer {background:white;}

.map-title-wrapper {max-width:1200px;width:100%;margin:0 auto;padding-left:300px;}

.list-pagination-wrap {max-width:1200px;width:100%;margin:0 auto;padding-left:300px;}
.school-results-list-wrapper {max-width:1200px;width:100%;margin:0 auto !important;padding-left:300px;}
#pagination-container {max-width:1200px;width:100%;margin:0 auto;padding-left:300px;}
.map-title-wrapper::after {display:none;}
.cd-locations-continer {position: relative;padding-top:65px}
.map-title {position: absolute;right: 0;top: -40px;background: none;}
.search-meta-info-found {position: absolute;top: 70px;color: black;}
.mainsearch-outer {max-width:1200px;width:100%;margin:0 auto;}
.mainsearch-outer .form-box {width: 270px;}
body .school-results-list-wrapper .school-results-list-item {box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2)!important;}
.mainsearch-outer .cd-programs-filter {display: block!important;height: 500px!important;box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2)!important;border:none;}
#nav-contact-button {background: white!important;
padding: 8px 18px !important;
color: #1C2388!important;
border-radius: 2px!important;
border: 2px solid #1C2388!important;}
#popup1 {display:none;}
.mobvip {display:none;}
#wrp1 .flex_column {position: revert;}
.list-pagination-wrap .search-meta-info {display:none!important;}

.mainsearch-outer .search-outer ul li {padding: 5px 0px 5px 20px!important;}
.mainsearch-outer .search-outer ul li::before {left: 0!important;right: auto!important}
.mainsearch-outer .search-outer ul li::after {left: 0!important;right: auto!important}
}
`

const stylesEl = document.createElement('style')
stylesEl.classList.add('exp-styles')
stylesEl.innerHTML = styles

// *** Logic *** //
initExp()

async function initExp() {
  await waitFor(() => document.head && document.body, false, { ms: 20 })

  document.head.appendChild(stylesEl)

  console.log('** InitExp **')

 // handleHero()
  handlePackages()
}

function handleHero() {

}

function handlePackages() {



var mainblock = document.querySelectorAll('#main-search-block .container')[0];

var outerWidth=window.outerWidth;

if (outerWidth>601){
// Insert HTML after the existing element
mainblock.insertAdjacentHTML('afterend', `<div id="wrp1"><div class="entry-content-wrapper clearfix" style="padding-top:60px;margin-top:0!important;margin-bottom: 0 !important;padding-bottom: 25px;">
<div class="flex_column av-bgcq4p-e6f583e2517cc067763fbb6f73f068a6 av_one_full  avia-builder-el-43  el_after_av_one_full  el_before_av_one_fifth  locations-list-section first flex_column_div  column-top-margin"><section class="av_textblock_section av-lz776bwm-ccedbf8f35a2e14ba7c2953980d95234 " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><h4 style="text-align: center;">Trusted by Families Across the U.S. in Over 325 Locations.</h4>
</div></section></div>
<div class="flex_column av-8luiwp-0fc02bb38157a329c7a7c21d6632db70 av_one_fifth  avia-builder-el-45  el_after_av_one_full  el_before_av_one_fifth  locations-list-section-col first flex_column_div  column-top-margin"><section class="av_textblock_section av-lz7778a2-40b94bdad6a34680312ba3387b0e0c4a " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ar/">Arkansas</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/az/">Arizona</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ca/">California</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ct">Connecticut</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/de">Delaware</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/fl/">Florida</a></li>
</ul>
</div></section></div>
<div class="flex_column av-7n5drt-984823140378024aaeb4ca8746cead77 av_one_fifth  avia-builder-el-47  el_after_av_one_fifth  el_before_av_one_fifth  locations-list-section-col flex_column_div  column-top-margin"><section class="av_textblock_section av-lz777mpi-93fe7aee382f65f36ebfc95a7ffc1440 " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>
<li><a href="https://www.cadence-education.com/locations/ga">Georgia</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ia">Iowa</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/il/">Illinois</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ks">Kansas</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ky/">Kentucky</a></li>
<li><a href="https://www.cadence-education.com/locations/ma/">Massachusetts</a></li>
</ul>
</div></section></div>
<div class="flex_column av-56nxuh-fc9c117786adcfc2e1cbb1b2cc276729 av_one_fifth  avia-builder-el-49  el_after_av_one_fifth  el_before_av_one_fifth  locations-list-section-col flex_column_div  column-top-margin"><section class="av_textblock_section av-lz777za2-4f78058048549cf9b7abde7434b927f5 " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>
<li><a href="https://www.cadence-education.com/locations/md/">Maryland</a></li>
<li><a href="https://www.cadence-education.com/locations/mn">Minnesota</a></li>
<li><a href="https://www.cadence-education.com/locations/mo">Missouri</a></li>
<li><a href="https://www.cadence-education.com/locations/ms/">Mississippi</a></li>
<li><a href="https://www.cadence-education.com/locations/nc/">North Carolina</a></li>
<li><a href="https://www.cadence-education.com/locations/ne/">Nebraska</a></li>
</ul>
</div></section></div>
<div class="flex_column av-3x4hs9-5a11df64d94823d3c0d65db702be53dd av_one_fifth  avia-builder-el-51  el_after_av_one_fifth  el_before_av_one_fifth  locations-list-section-col flex_column_div  column-top-margin"><section class="av_textblock_section av-lz778dft-7151abc4f41a68999e2dfc336425814e " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>
<li><a href="https://www.cadence-education.com/locations/nj/">New Jersey</a></li>
<li><a href="https://www.cadence-education.com/locations/ny/">New York</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/or/">Oregon</a></li>
<li><a href="https://www.cadence-education.com/locations/pa">Pennsylvania</a></li>
<li><a href="https://www.cadence-education.com/locations/ri/">Rhode Island</a></li>
<li><a href="https://www.cadence-education.com/locations/sc/">South Carolina</a></li>
</ul>
</div></section></div>
<div class="flex_column av-25oyzt-8f0f1d672bba43952b15be00bb52ab00 av_one_fifth  avia-builder-el-53  el_after_av_one_fifth  el_before_av_section  avia-builder-el-last  locations-list-section-col flex_column_div  column-top-margin"><section class="av_textblock_section av-lz778qpe-7da7d6f9b4b1c0d732336fefa1d3ae24 " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>
<li><a href="https://www.cadence-education.com/locations/tn/">Tennessee</a></li>
<li><a href="https://www.cadence-education.com/locations/tx/">Texas</a></li>
<li><a href="https://www.cadence-education.com/locations/ut/">Utah</a></li>
<li><a href="https://www.cadence-education.com/locations/va">Virginia</a></li>
<li><a href="https://www.cadence-education.com/locations/wa/">Washington</a></li>
<li><a href="https://www.cadence-education.com/locations/wi/">Wisconsin</a></li>
</ul>
</div></section></div>
</div></div>`);

}

else {

// Insert HTML after the existing element
mainblock.insertAdjacentHTML('afterend', `<div id="wrp1"><div class="entry-content-wrapper clearfix" style="padding-top:60px;margin-top:0!important;margin-bottom: 0 !important;padding-bottom: 25px;">
<div class="flex_column av-bgcq4p-e6f583e2517cc067763fbb6f73f068a6 av_one_full  avia-builder-el-43  el_after_av_one_full  el_before_av_one_fifth  locations-list-section first flex_column_div  column-top-margin"><section class="av_textblock_section av-lz776bwm-ccedbf8f35a2e14ba7c2953980d95234 " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><h4 style="text-align: center;">Trusted by Families Across the U.S. in Over 325 Locations.</h4>
</div></section></div>
<div style="width: 50%;float: left;" class="flex_column av-8luiwp-0fc02bb38157a329c7a7c21d6632db70 av_one_fifth  avia-builder-el-45  el_after_av_one_full  el_before_av_one_fifth  locations-list-section-col first flex_column_div  column-top-margin"><section class="av_textblock_section av-lz7778a2-40b94bdad6a34680312ba3387b0e0c4a " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ar/">Arkansas</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/az/">Arizona</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ca/">California</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ct">Connecticut</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/de">Delaware</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/fl/">Florida</a></li>
<li><a href="https://www.cadence-education.com/locations/ga">Georgia</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ia">Iowa</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/il/">Illinois</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ks">Kansas</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/ky/">Kentucky</a></li>
<li><a href="https://www.cadence-education.com/locations/ma/">Massachusetts</a></li>
<li><a href="https://www.cadence-education.com/locations/md/">Maryland</a></li>
<li><a href="https://www.cadence-education.com/locations/mn">Minnesota</a></li>
<li><a href="https://www.cadence-education.com/locations/mo">Missouri</a></li>
</ul>
</div></section></div>



<div style="width: 50%;float: right;" class="flex_column av-3x4hs9-5a11df64d94823d3c0d65db702be53dd av_one_fifth  avia-builder-el-51  el_after_av_one_fifth  el_before_av_one_fifth  locations-list-section-col flex_column_div  column-top-margin"><section class="av_textblock_section av-lz778dft-7151abc4f41a68999e2dfc336425814e " itemscope="itemscope" itemtype="https://schema.org/CreativeWork"><div class="avia_textblock" itemprop="text"><ul>

<li><a href="https://www.cadence-education.com/locations/ms/">Mississippi</a></li>
<li><a href="https://www.cadence-education.com/locations/nc/">North Carolina</a></li>
<li><a href="https://www.cadence-education.com/locations/ne/">Nebraska</a></li>
<li><a href="https://www.cadence-education.com/locations/nj/">New Jersey</a></li>
<li><a href="https://www.cadence-education.com/locations/ny/">New York</a></li>
<li style="text-align: left;"><a href="https://www.cadence-education.com/locations/or/">Oregon</a></li>
<li><a href="https://www.cadence-education.com/locations/pa">Pennsylvania</a></li>
<li><a href="https://www.cadence-education.com/locations/ri/">Rhode Island</a></li>
<li><a href="https://www.cadence-education.com/locations/sc/">South Carolina</a></li>
<li><a href="https://www.cadence-education.com/locations/tn/">Tennessee</a></li>
<li><a href="https://www.cadence-education.com/locations/tx/">Texas</a></li>
<li><a href="https://www.cadence-education.com/locations/ut/">Utah</a></li>
<li><a href="https://www.cadence-education.com/locations/va">Virginia</a></li>
<li><a href="https://www.cadence-education.com/locations/wa/">Washington</a></li>
<li><a href="https://www.cadence-education.com/locations/wi/">Wisconsin</a></li>
</ul>
</div></section></div>
</div></div>`);

}








document.querySelectorAll('h1')[0].innerText='Find a School';
document.querySelectorAll('h1')[1].innerText='Find a School';

document.querySelectorAll('.avia_textblock p')[0].innerText='Based on your search, here are the schools that best fit your preferences.';
document.querySelectorAll('.avia_textblock p')[1].innerText='Based on your search, here are the schools that best fit your preferences.';

document.querySelectorAll('.getmylocation')[0].style.display='none';
document.querySelectorAll('.getmylocation')[1].style.display='none';


document.querySelectorAll('.form-box')[0].insertAdjacentHTML('beforeend', '<a href="javascript:void(0)" class="getmylocation getmylocation1" style="position:absolute;right:20px;top:36px;display:block">&nbsp;</a>');



document.querySelectorAll('.cd-locations-continer')[0].insertAdjacentHTML('afterbegin', `<div class="mainsearch-outer"><div class="form-box"><div class="search-outer">

<span style="display: block!important;background: white;padding: 10px 15px 0 15px;font-weight: bold;font-size: 16px;box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);">What Program do you need?</span>

<ul class="cd-programs-filter">
<li data-id="29300" data-val="Faith Based">Faith Based</li>
<li data-id="26927" data-val="Language Immersion">Language Immersion</li>
<li data-id="22201" data-val="Reggio Emilia">Reggio Emilia</li>
<li data-id="21946" data-val="Montessori Preschool Program">Montessori Preschool Program</li>
<li data-id="21937" data-val="Montessori Infant Program">Montessori Infant Program</li>
<li data-id="21916" data-val="Montessori Toddler Program">Montessori Toddler Program</li>
<li data-id="6669" data-val="Infant Care">Infant Care</li>
<li data-id="6667" data-val="Toddler Care">Toddler Care</li>
<li data-id="6665" data-val="Preschool">Preschool</li>
<li data-id="6663" data-val="Pre-K &amp; Kindergarten Club">Pre-K &amp; Kindergarten Club</li>
<li data-id="6479" data-val="Private Kindergarten">Private Kindergarten</li>
<li data-id="6477" data-val="School-Age Program">School-Age Program</li>
<li data-id="6475" data-val="Elementary Schools">Elementary Schools</li>
<li data-id="6471" data-val="Summer Programs">Summer Programs</li>
<li data-id="6473" data-val="Montessori">Montessori</li>
</ul>
</div></div></div>




<div id="popup1" class="overlay">
            <div class="popup">
                
                <span class="closescreen"><img src="https://raw.githubusercontent.com/kostyantynvernik/cadence-education/refs/heads/main/Frame.png"></span>
                <div class="content">
                 <div class="form-box">
				 <div class="search-outer">
<span class="search-placeholder">FILTERS</span>
<div style="display: block!important;background: white;padding: 10px 15px 15px 15px;font-weight: bold;font-size: 16px;">FILTERS</div>
<div style="display: block!important;background: white;padding: 10px 15px 15px 15px;font-weight: bold;font-size: 16px;">FILTERS</div>
<div style="display: block!important;background: white;padding: 10px 15px 0 15px;font-weight: bold;font-size: 16px;">What Program do you need?</div>
<ul class="cd-programs-filter">
<li data-id="29300" data-val="Faith Based">Faith Based</li>
<li data-id="26927" data-val="Language Immersion">Language Immersion</li>
<li data-id="22201" data-val="Reggio Emilia">Reggio Emilia</li>
<li data-id="21946" data-val="Montessori Preschool Program">Montessori Preschool Program</li>
<li data-id="21937" data-val="Montessori Infant Program">Montessori Infant Program</li>
<li data-id="21916" data-val="Montessori Toddler Program">Montessori Toddler Program</li>
<li data-id="6669" data-val="Infant Care">Infant Care</li>
<li data-id="6667" data-val="Toddler Care">Toddler Care</li>
<li data-id="6665" data-val="Preschool">Preschool</li>
<li data-id="6663" data-val="Pre-K &amp; Kindergarten Club">Pre-K &amp; Kindergarten Club</li>
<li data-id="6479" data-val="Private Kindergarten">Private Kindergarten</li>
<li data-id="6477" data-val="School-Age Program">School-Age Program</li>
<li data-id="6475" data-val="Elementary Schools">Elementary Schools</li>
<li data-id="6471" data-val="Summer Programs">Summer Programs</li>
<li data-id="6473" data-val="Montessori">Montessori</li>
</ul>
<div class="mobshow"><span>SHOW RESULTS</span></div>
</div></div>
                </div>
            </div>
        </div>



	




`);





document.querySelectorAll('.search-meta-info-found')[0].insertAdjacentHTML('afterend', `<span class="mobvip"><img src="https://raw.githubusercontent.com/kostyantynvernik/cadence-education/refs/heads/main/Frame%2018316.png"></span>`);





var modalTrigger = document.querySelectorAll('.mobvip')[0];


const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);


const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("overlay")[0];
const modalClose = document.getElementsByClassName("closescreen")[0];




document.querySelectorAll('.getmylocation1')[0].addEventListener("click", function () {
document.querySelectorAll('.getmylocation')[0].click();
});

modalTrigger.addEventListener("click", function () {
document.getElementsByClassName("overlay")[0].classList.add("overlaytarget");

document.getElementsByClassName("overlay")[0].scrollIntoView({ behavior: "smooth", block: "start"});
});



modalClose.addEventListener("click", function () {
 
 
    document.getElementsByClassName("overlay")[0].classList.remove("overlaytarget");

});

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
       
    
      
 document.getElementsByClassName("overlay")[0].classList.remove("overlaytarget");
     
    }
});


document.querySelector('.map-title').innerHTML=document.querySelector('.map-title').innerHTML.replaceAll("Hide Map","<img style='vertical-align: text-bottom;height: 18px;' src='https://raw.githubusercontent.com/kostyantynvernik/cadence-education/refs/heads/main/Frame2.png'> Hide Map");



var what3=document.querySelectorAll('.find-school-form .cd-programs-filter li');
var what1 = document.querySelectorAll('.mainsearch-outer .cd-programs-filter li');


var what5 = document.querySelectorAll('.find-school-form .cd-programs-filter li');


what10 = document.querySelectorAll('#popup1 .cd-programs-filter li');


what1.forEach(what2 => {
  what2.addEventListener('click', function(event) {
		for (var i = 0; i < what3.length; i++) {
if (what3[i].getAttribute('data-id') == event.target.getAttribute('data-id')){what3[i].click();console.log(what3[i].getAttribute('data-id'));};
}
if (document.querySelectorAll('.find-school-form .cd-programs-filter li.selected').length==0){
document.querySelectorAll('.find-school-form .search-placeholder')[0].innerText='All programs';
}


  });
});





what33=document.querySelectorAll('.mainsearch-outer .cd-programs-filter li');

what10.forEach(what20 => {
  what20.addEventListener('click', function(event) {
		for (var g = 0; g < what3.length; g++) {
if (what3[g].getAttribute('data-id') == event.target.getAttribute('data-id')){what3[g].click();};
}
if (document.querySelectorAll('.find-school-form .cd-programs-filter li.selected').length==0){
document.querySelectorAll('.find-school-form .search-placeholder')[0].innerText='All programs';
}



});

});



var what30=document.querySelectorAll('.mainsearch-outer .cd-programs-filter li');
what300=document.querySelectorAll('#popup1 .cd-programs-filter li');

var datassg=[];

	for (var y = 0; y < what30.length; y++) {
	
datassg.push(what30[y].getAttribute('data-id'));

}


const attrObserver = new MutationObserver((mutations) => {
  mutations.forEach(mu => {
    if (mu.type !== "attributes" && mu.attributeName !== "class") return;
	
	
	
	
	

	indexx = Array.from(datassg).indexOf(mu.target.getAttribute('data-id'));
    console.log(indexx);
	
	
	
	
	
	
	
	

	
if (what30[indexx].getAttribute('data-id') == mu.target.getAttribute('data-id')){
if (what30[indexx].className==""){what30[indexx].classList.add("selected");}
	else {what30[indexx].classList.remove("selected");}

};




	
if (what300[indexx].getAttribute('data-id') == mu.target.getAttribute('data-id')){
if (what300[indexx].className==""){what300[indexx].classList.add("selected");}
	else {what300[indexx].classList.remove("selected");}

};



	
	
	
	
	
  });
});



const ELS_test = what5;
ELS_test.forEach(el => attrObserver.observe(el, {attributes: true}));











document.querySelectorAll('.mobshow span')[0].addEventListener("click", function () {
 
 
document.querySelectorAll("#search-location")[0].click();
   document.getElementsByClassName("overlay")[0].classList.remove("overlaytarget");

document.getElementsByClassName("mobvip")[0].scrollIntoView({ behavior: "smooth", block: "start"});


});





 pushDataLayer(
        'add_block top',
        'Block',
        'Videos',
        'Top'
      );
	  
	  
	  

}


// *** HELPERS *** //

// Waiting for loading by condition
async function waitFor(condition, cb = false, customConfig = {}) {
  const config = {
    ms: 500, // repeat each 0.5 second if condition is false
    limit: 10, // limit in second seconds

    ...customConfig
  }

  if (typeof condition === 'function') {
    if (condition()) {
      if (typeof cb === 'function') cb()
      return
    }

    return new Promise((resolve) => {
      let limit = config.limit * 1000
      const interval = setInterval(function () {
        if (condition() || limit <= 0) {
          clearInterval(interval)
          if (limit > 0 && typeof cb === 'function') cb()
          resolve()
        }
        limit -= config.ms
      }, config.ms)
    })
  }

  if (condition.startsWith('.') || condition.startsWith('#')) {
    if (_$(condition)) {
      if (typeof cb === 'function') cb(_$(condition))
      return
    }

    return new Promise((resolve) => {
      const observer = new MutationObserver((mutations, observer) => {
        if (_$(condition)) {
          if (typeof cb === 'function') cb(_$(condition))
          observer.disconnect()
          resolve()
        }
      })

      observer.observe(document, { childList: true, subtree: true })
    })
  }
}

// Mutation Observer
function initMutation(observeEl = document.body, cbAdded, cbRemoved) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el) return

  let observer = new MutationObserver((mutations, observer) => {
    for (let mutation of mutations) {
      if (typeof cbAdded === 'function') {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbAdded(node, observer)
        }
      }

      if (typeof cbRemoved === 'function') {
        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue
          cbRemoved(node, observer)
        }
      }
    }
  })

  observer.observe(el, { childList: true, subtree: true })

  return observer
}

// Intersection Observer
function initIntersection(observeEl, cb, customConfig) {
  const el = typeof observeEl === 'string' ? _$(observeEl) : observeEl

  if (!el || typeof cb !== 'function') return

  const config = {
    root: null,
    threshold: 0.3, // 0 - 1 | A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
    ...customConfig
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      cb(entry, observer)
    })
  }, config)

  observer.observe(el)

  return observer
}

function focusTimeEvent(el, cb, viewElementProcent = 0.1) {
  let entryTime = 0
  initIntersection(
    el,
    ({ isIntersecting, time }) => {
      if (isIntersecting) {
        entryTime = time
      } else if (entryTime) {
        const diffTime = +((time - entryTime) / 1000).toFixed(1)
        cb(diffTime + 's')
        entryTime = 0
      }
    },
    { threshold: viewElementProcent }
  )
}

function visibilityEvent(el, cb, customConfig = {}) {
  const config = {
    threshold: 0.3,
    ...customConfig,
    timer: null
  }
  initIntersection(
    el,
    ({ isIntersecting, target }, observer) => {
      // console.log(target, isIntersecting);
      if (isIntersecting) {
        config.timer = setTimeout(() => {
          if (isElementInViewport(target)) {
            cb()
            observer.disconnect()
          }
        }, 3000)
      } else {
        clearTimeout(config.timer)
      }
    },
    config
  )
}

// Artificial delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Check if element in viewport
function isElementInViewport(selector) {
  const el = typeof selector === 'string' ? _$(selector) : selector

  if (!el) return false

  const rect = el.getBoundingClientRect()
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight

  return (
    rect.top + rect.height * 0.3 < windowHeight &&
    rect.bottom > rect.height * 0.3
  )
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

// Shordcode for selectors
function _$(selector, context = document) {
  return context.querySelector(selector)
}
function _$$(selector, context = document, toSimpleArray = false) {
  const arr = context.querySelectorAll(selector)

  return toSimpleArray ? Array.from(arr) : arr
}

// GA 4 events
function pushDataLayer(name = '', desc = '', type = '', loc = '') {
  window.dataLayer = window.dataLayer || []

  try {
    const event = {
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    }

    console.log('** GA4 Event **', event)

    if (!config.debug) {
      dataLayer.push(event)
    }
  } catch (e) {
    console.log('** GA4 Error **', e)
  }
}



// *** Exp BG process *** //

//Clarity
if (
  !config.debug &&
  Array.isArray(config.clarity) &&
  config.clarity.length === 3
) {
  waitFor(
    () => typeof clarity == 'function',
    () => {
      clarity(...config.clarity)
    }
  )
}

// Svg objects
function getSvg(name) {
  const svgObj = {}

  return svgObj[name]
}
