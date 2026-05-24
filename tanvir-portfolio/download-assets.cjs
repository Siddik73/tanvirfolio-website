const fs = require('fs');
const https = require('https');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

const assets = [
  { url: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif', name: 'hero-space-voyage-preview-eECLH3Yc.gif' },
  { url: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif', name: 'hero-codenest-preview-Cgppc2qV.gif' },
  { url: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif', name: 'hero-vex-ventures-preview-BczMFIiw.gif' },
  { url: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif', name: 'hero-stellar-ai-v2-preview-DjvxjG3C.gif' },
  { url: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif', name: 'hero-asme-preview-B_nGDnTP.gif' },
  { url: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif', name: 'hero-transform-data-preview-Cx5OU29N.gif' },
  { url: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif', name: 'hero-vitara-preview-Cjz2QYyU.gif' },
  { url: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif', name: 'hero-terra-preview-BFjrCr7T.gif' },
  { url: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif', name: 'hero-skyelite-preview-DHaZIgUv.gif' },
  { url: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif', name: 'hero-aethera-preview-DknSlcTa.gif' },
  { url: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif', name: 'hero-designpro-preview-D8c5_een.gif' },
  { url: 'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif', name: 'hero-stellar-ai-preview-D3HL6bw1.gif' },
  { url: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif', name: 'hero-xportfolio-preview-D4A8maiC.gif' },
  { url: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif', name: 'hero-orbit-web3-preview-BXt4OttD.gif' },
  { url: 'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif', name: 'hero-nexora-preview-cx5HmUgo.gif' },
  { url: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif', name: 'hero-evr-ventures-preview-DZxeVFEX.gif' },
  { url: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif', name: 'hero-planet-orbit-preview-DWAP8Z1P.gif' },
  { url: 'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif', name: 'hero-new-era-preview-CocuDUm9.gif' },
  { url: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif', name: 'hero-wealth-preview-B70idl_u.gif' },
  { url: 'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif', name: 'hero-luminex-preview-CxOP7ce6.gif' },
  { url: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif', name: 'hero-celestia-preview-0yO3jXO8.gif' },

  { url: 'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png', name: 'hero-portrait.png' },
  { url: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png', name: 'moon_icon.png' },
  { url: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png', name: 'p59_1.png' },
  { url: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png', name: 'lego_icon.png' },
  { url: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png', name: 'group_134.png' },

  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85', name: 'p1-c1-i1.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85', name: 'p1-c1-i2.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85', name: 'p1-c2-i1.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85', name: 'p2-c1-i1.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85', name: 'p2-c1-i2.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85', name: 'p2-c2-i1.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85', name: 'p3-c1-i1.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85', name: 'p3-c1-i2.webp' },
  { url: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85', name: 'p3-c2-i1.webp' }
];

const downloadFile = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        downloadFile(res.headers.location, filepath).then(resolve).catch(reject);
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode} for ${url}`));
      }
    });
  });
};

(async () => {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const asset of assets) {
    const dest = path.join(ASSETS_DIR, asset.name);
    try {
      await downloadFile(asset.url, dest);
      console.log(`Downloaded ${asset.name}`);
    } catch (err) {
      console.error(`Failed to download ${asset.name}: ${err.message}`);
    }
  }
  console.log('All downloads completed!');
})();
