const countriesWithFlags = [
  { title: 'Afghanistan', image: require('../../assets/imgCountry/af.png') },
  { title: 'Aland', image: require('../../assets/imgCountry/ax.png') },
  { title: 'Albania', image: require('../../assets/imgCountry/al.png') },
  { title: 'Algeria', image: require('../../assets/imgCountry/dz.png') },
  { title: 'American Samoa', image: require('../../assets/imgCountry/as.png') },
  { title: 'Andorra', image: require('../../assets/imgCountry/ad.png') },
  { title: 'Angola', image: require('../../assets/imgCountry/ao.png') },
  { title: 'Anguilla', image: require('../../assets/imgCountry/ai.png') },
  { title: 'Antarctica', image: require('../../assets/imgCountry/aq.png') },
  { title: 'Antigua and Barbuda', image: require('../../assets/imgCountry/ag.png') },
  { title: 'Argentina', image: require('../../assets/imgCountry/ar.png') },
  { title: 'Armenia', image: require('../../assets/imgCountry/am.png') },
  { title: 'Aruba', image: require('../../assets/imgCountry/aw.png') },
  { title: 'Australia', image: require('../../assets/imgCountry/au.png') },
  { title: 'Austria', image: require('../../assets/imgCountry/at.png') },
  { title: 'Azerbaijan', image: require('../../assets/imgCountry/az.png') },
  { title: 'Bahamas', image: require('../../assets/imgCountry/bs.png') },
  { title: 'Bahrain', image: require('../../assets/imgCountry/bh.png') },
  { title: 'Bangladesh', image: require('../../assets/imgCountry/bd.png') },
  { title: 'Barbados', image: require('../../assets/imgCountry/bb.png') },
  { title: 'Belarus', image: require('../../assets/imgCountry/by.png') },
  { title: 'Belgium', image: require('../../assets/imgCountry/be.png') },
  { title: 'Belize', image: require('../../assets/imgCountry/bz.png') },
  { title: 'Benin', image: require('../../assets/imgCountry/bj.png') },
  { title: 'Bermuda', image: require('../../assets/imgCountry/bm.png') },
  { title: 'Bhutan', image: require('../../assets/imgCountry/bt.png') },
  { title: 'Bolivia', image: require('../../assets/imgCountry/bo.png') },
  { title: 'Bonaire', image: require('../../assets/imgCountry/bq.png') },
  { title: 'Bosnia and Herzegovina', image: require('../../assets/imgCountry/ba.png') },
  { title: 'Botswana', image: require('../../assets/imgCountry/bw.png') },
  { title: 'Bouvet Island', image: require('../../assets/imgCountry/bv.png') },
  { title: 'Brazil', image: require('../../assets/imgCountry/br.png') },
  { title: 'British Indian Ocean Territory', image: require('../../assets/imgCountry/io.png') },
  { title: 'British Virgin Islands', image: require('../../assets/imgCountry/vg.png') },
  { title: 'Brunei', image: require('../../assets/imgCountry/bn.png') },
  { title: 'Bulgaria', image: require('../../assets/imgCountry/bg.png') },
  { title: 'Burkina Faso', image: require('../../assets/imgCountry/bf.png') },
  { title: 'Burundi', image: require('../../assets/imgCountry/bi.png') },
  { title: 'Cambodia', image: require('../../assets/imgCountry/kh.png') },
  { title: 'Cameroon', image: require('../../assets/imgCountry/cm.png') },
  { title: 'Canada', image: require('../../assets/imgCountry/ca.png') },
  { title: 'Cape Verde', image: require('../../assets/imgCountry/cv.png') },
  { title: 'Cayman Islands', image: require('../../assets/imgCountry/ky.png') },
  { title: 'Central African Republic', image: require('../../assets/imgCountry/cf.png') },
  { title: 'Chad', image: require('../../assets/imgCountry/td.png') },
  { title: 'Chile', image: require('../../assets/imgCountry/cl.png') },
  { title: 'China', image: require('../../assets/imgCountry/cn.png') },
  { title: 'Christmas Island', image: require('../../assets/imgCountry/cx.png') },
  { title: 'Cocos (Keeling) Islands', image: require('../../assets/imgCountry/cc.png') },
  { title: 'Colombia', image: require('../../assets/imgCountry/co.png') },
  { title: 'Comoros', image: require('../../assets/imgCountry/km.png') },
  { title: 'Cook Islands', image: require('../../assets/imgCountry/ck.png') },
  { title: 'Costa Rica', image: require('../../assets/imgCountry/cr.png') },
  { title: 'Croatia', image: require('../../assets/imgCountry/hr.png') },
  { title: 'Cuba', image: require('../../assets/imgCountry/cu.png') },
  { title: 'Curacao', image: require('../../assets/imgCountry/cw.png') },
  { title: 'Cyprus', image: require('../../assets/imgCountry/cy.png') },
  { title: 'Czech Republic', image: require('../../assets/imgCountry/cz.png') },
  { title: 'Democratic Republic of the Congo', image: require('../../assets/imgCountry/cd.png') },
  { title: 'Denmark', image: require('../../assets/imgCountry/dk.png') },
  { title: 'Djibouti', image: require('../../assets/imgCountry/dj.png') },
  { title: 'Dominica', image: require('../../assets/imgCountry/dm.png') },
  { title: 'Dominican Republic', image: require('../../assets/imgCountry/do.png') },
  { title: 'East Timor', image: require('../../assets/imgCountry/tl.png') },
  { title: 'Ecuador', image: require('../../assets/imgCountry/ec.png') },
  { title: 'Egypt', image: require('../../assets/imgCountry/eg.png') },
  { title: 'El Salvador', image: require('../../assets/imgCountry/sv.png') },
  { title: 'Equatorial Guinea', image: require('../../assets/imgCountry/gq.png') },
  { title: 'Eritrea', image: require('../../assets/imgCountry/er.png') },
  { title: 'Estonia', image: require('../../assets/imgCountry/ee.png') },
  { title: 'Eswatini', image: require('../../assets/imgCountry/sz.png') },
  { title: 'Ethiopia', image: require('../../assets/imgCountry/et.png') },
  { title: 'Falkland Islands', image: require('../../assets/imgCountry/fk.png') },
  { title: 'Faroe Islands', image: require('../../assets/imgCountry/fo.png') },
  { title: 'Fiji', image: require('../../assets/imgCountry/fj.png') },
  { title: 'Finland', image: require('../../assets/imgCountry/fi.png') },
  { title: 'France', image: require('../../assets/imgCountry/fr.png') },
  { title: 'French Guiana', image: require('../../assets/imgCountry/gf.png') },
  { title: 'French Polynesia', image: require('../../assets/imgCountry/pf.png') },
  { title: 'French Southern Territories', image: require('../../assets/imgCountry/tf.png') },
  { title: 'Gabon', image: require('../../assets/imgCountry/ga.png') },
  { title: 'Gambia', image: require('../../assets/imgCountry/gm.png') },
  { title: 'Georgia', image: require('../../assets/imgCountry/ge.png') },
  { title: 'Germany', image: require('../../assets/imgCountry/de.png') },
  { title: 'Ghana', image: require('../../assets/imgCountry/gh.png') },
  { title: 'Gibraltar', image: require('../../assets/imgCountry/gi.png') },
  { title: 'Greece', image: require('../../assets/imgCountry/gr.png') },
  { title: 'Greenland', image: require('../../assets/imgCountry/gl.png') },
  { title: 'Grenada', image: require('../../assets/imgCountry/gd.png') },
  { title: 'Guadeloupe', image: require('../../assets/imgCountry/gp.png') },
  { title: 'Guam', image: require('../../assets/imgCountry/gu.png') },
  { title: 'Guatemala', image: require('../../assets/imgCountry/gt.png') },
  { title: 'Guernsey', image: require('../../assets/imgCountry/gg.png') },
  { title: 'Guinea', image: require('../../assets/imgCountry/gn.png') },
  { title: 'Guinea-Bissau', image: require('../../assets/imgCountry/gw.png') },
  { title: 'Guyana', image: require('../../assets/imgCountry/gy.png') },
  { title: 'Haiti', image: require('../../assets/imgCountry/ht.png') },
  { title: 'Heard Island and McDonald Islands', image: require('../../assets/imgCountry/hm.png') },
  { title: 'Honduras', image: require('../../assets/imgCountry/hn.png') },
  { title: 'Hong Kong', image: require('../../assets/imgCountry/hk.png') },
  { title: 'Hungary', image: require('../../assets/imgCountry/hu.png') },
  { title: 'Iceland', image: require('../../assets/imgCountry/is.png') },
  { title: 'India', image: require('../../assets/imgCountry/in.png') },
  { title: 'Indonesia', image: require('../../assets/imgCountry/id.png') },
  { title: 'Iran', image: require('../../assets/imgCountry/ir.png') },
  { title: 'Iraq', image: require('../../assets/imgCountry/iq.png') },
  { title: 'Ireland', image: require('../../assets/imgCountry/ie.png') },
  { title: 'Isle of Man', image: require('../../assets/imgCountry/im.png') },
  { title: 'Israel', image: require('../../assets/imgCountry/il.png') },
  { title: 'Italy', image: require('../../assets/imgCountry/it.png') },
  { title: 'Ivory Coast', image: require('../../assets/imgCountry/ci.png') },
  { title: 'Jamaica', image: require('../../assets/imgCountry/jm.png') },
  { title: 'Japan', image: require('../../assets/imgCountry/jp.png') },
  { title: 'Jersey', image: require('../../assets/imgCountry/je.png') },
  { title: 'Jordan', image: require('../../assets/imgCountry/jo.png') },
  { title: 'Kazakhstan', image: require('../../assets/imgCountry/kz.png') },
  { title: 'Kenya', image: require('../../assets/imgCountry/ke.png') },
  { title: 'Kiribati', image: require('../../assets/imgCountry/ki.png') },
  { title: 'Kosovo', image: require('../../assets/imgCountry/xk.png') },
  { title: 'Kuwait', image: require('../../assets/imgCountry/kw.png') },
  { title: 'Kyrgyzstan', image: require('../../assets/imgCountry/kg.png') },
  { title: 'Laos', image: require('../../assets/imgCountry/la.png') },
  { title: 'Latvia', image: require('../../assets/imgCountry/lv.png') },
  { title: 'Lebanon', image: require('../../assets/imgCountry/lb.png') },
  { title: 'Lesotho', image: require('../../assets/imgCountry/ls.png') },
  { title: 'Liberia', image: require('../../assets/imgCountry/lr.png') },
  { title: 'Libya', image: require('../../assets/imgCountry/ly.png') },
  { title: 'Liechtenstein', image: require('../../assets/imgCountry/li.png') },
  { title: 'Lithuania', image: require('../../assets/imgCountry/lt.png') },
  { title: 'Luxembourg', image: require('../../assets/imgCountry/lu.png') },
  { title: 'Macao', image: require('../../assets/imgCountry/mo.png') },
  { title: 'Madagascar', image: require('../../assets/imgCountry/mg.png') },
  { title: 'Malawi', image: require('../../assets/imgCountry/mw.png') },
  { title: 'Malaysia', image: require('../../assets/imgCountry/my.png') },
  { title: 'Maldives', image: require('../../assets/imgCountry/mv.png') },
  { title: 'Mali', image: require('../../assets/imgCountry/ml.png') },
  { title: 'Malta', image: require('../../assets/imgCountry/mt.png') },
  { title: 'Marshall Islands', image: require('../../assets/imgCountry/mh.png') },
  { title: 'Martinique', image: require('../../assets/imgCountry/mq.png') },
  { title: 'Mauritania', image: require('../../assets/imgCountry/mr.png') },
  { title: 'Mauritius', image: require('../../assets/imgCountry/mu.png') },
  { title: 'Mayotte', image: require('../../assets/imgCountry/yt.png') },
  { title: 'Mexico', image: require('../../assets/imgCountry/mx.png') },
  { title: 'Micronesia', image: require('../../assets/imgCountry/fm.png') },
  { title: 'Moldova', image: require('../../assets/imgCountry/md.png') },
  { title: 'Monaco', image: require('../../assets/imgCountry/mc.png') },
  { title: 'Mongolia', image: require('../../assets/imgCountry/mn.png') },
  { title: 'Montenegro', image: require('../../assets/imgCountry/me.png') },
  { title: 'Montserrat', image: require('../../assets/imgCountry/ms.png') },
  { title: 'Morocco', image: require('../../assets/imgCountry/ma.png') },
  { title: 'Mozambique', image: require('../../assets/imgCountry/mz.png') },
  { title: 'Myanmar (Burma)', image: require('../../assets/imgCountry/mm.png') },
  { title: 'Namibia', image: require('../../assets/imgCountry/na.png') },
  { title: 'Nauru', image: require('../../assets/imgCountry/nr.png') },
  { title: 'Nepal', image: require('../../assets/imgCountry/np.png') },
  { title: 'Netherlands', image: require('../../assets/imgCountry/nl.png') },
  { title: 'New Caledonia', image: require('../../assets/imgCountry/nc.png') },
  { title: 'New Zealand', image: require('../../assets/imgCountry/nz.png') },
  { title: 'Nicaragua', image: require('../../assets/imgCountry/ni.png') },
  { title: 'Niger', image: require('../../assets/imgCountry/ne.png') },
  { title: 'Nigeria', image: require('../../assets/imgCountry/ng.png') },
  { title: 'Niue', image: require('../../assets/imgCountry/nu.png') },
  { title: 'Norfolk Island', image: require('../../assets/imgCountry/nf.png') },
  { title: 'North Korea', image: require('../../assets/imgCountry/kp.png') },
  { title: 'North Macedonia', image: require('../../assets/imgCountry/mk.png') },
  { title: 'Northern Mariana Islands', image: require('../../assets/imgCountry/mp.png') },
  { title: 'Norway', image: require('../../assets/imgCountry/no.png') },
  { title: 'Oman', image: require('../../assets/imgCountry/om.png') },
  { title: 'Pakistan', image: require('../../assets/imgCountry/pk.png') },
  { title: 'Palau', image: require('../../assets/imgCountry/pw.png') },
  { title: 'Palestine', image: require('../../assets/imgCountry/ps.png') },
  { title: 'Panama', image: require('../../assets/imgCountry/pa.png') },
  { title: 'Papua New Guinea', image: require('../../assets/imgCountry/pg.png') },
  { title: 'Paraguay', image: require('../../assets/imgCountry/py.png') },
  { title: 'Peru', image: require('../../assets/imgCountry/pe.png') },
  { title: 'Philippines', image: require('../../assets/imgCountry/ph.png') },
  { title: 'Pitcairn Islands', image: require('../../assets/imgCountry/pn.png') },
  { title: 'Poland', image: require('../../assets/imgCountry/pl.png') },
  { title: 'Portugal', image: require('../../assets/imgCountry/pt.png') },
  { title: 'Puerto Rico', image: require('../../assets/imgCountry/pr.png') },
  { title: 'Qatar', image: require('../../assets/imgCountry/qa.png') },
  { title: 'Republic of the Congo', image: require('../../assets/imgCountry/cg.png') },
  { title: 'Reunion', image: require('../../assets/imgCountry/re.png') },
  { title: 'Romania', image: require('../../assets/imgCountry/ro.png') },
  { title: 'Russia', image: require('../../assets/imgCountry/ru.png') },
  { title: 'Rwanda', image: require('../../assets/imgCountry/rw.png') },
  { title: 'Saint Barthelemy', image: require('../../assets/imgCountry/bl.png') },
  { title: 'Saint Helena', image: require('../../assets/imgCountry/sh.png') },
  { title: 'Saint Kitts and Nevis', image: require('../../assets/imgCountry/kn.png') },
  { title: 'Saint Lucia', image: require('../../assets/imgCountry/lc.png') },
  { title: 'Saint Martin', image: require('../../assets/imgCountry/mf.png') },
  { title: 'Saint Pierre and Miquelon', image: require('../../assets/imgCountry/pm.png') },
  { title: 'Saint Vincent and the Grenadines', image: require('../../assets/imgCountry/vc.png') },
  { title: 'Samoa', image: require('../../assets/imgCountry/ws.png') },
  { title: 'San Marino', image: require('../../assets/imgCountry/sm.png') },
  { title: 'Sao Tome and Principe', image: require('../../assets/imgCountry/st.png') },
  { title: 'Saudi Arabia', image: require('../../assets/imgCountry/sa.png') },
  { title: 'Senegal', image: require('../../assets/imgCountry/sn.png') },
  { title: 'Serbia', image: require('../../assets/imgCountry/rs.png') },
  { title: 'Seychelles', image: require('../../assets/imgCountry/sc.png') },
  { title: 'Sierra Leone', image: require('../../assets/imgCountry/sl.png') },
  { title: 'Singapore', image: require('../../assets/imgCountry/sg.png') },
  { title: 'Sint Maarten', image: require('../../assets/imgCountry/sx.png') },
  { title: 'Slovakia', image: require('../../assets/imgCountry/sk.png') },
  { title: 'Slovenia', image: require('../../assets/imgCountry/si.png') },
  { title: 'Solomon Islands', image: require('../../assets/imgCountry/sb.png') },
  { title: 'Somalia', image: require('../../assets/imgCountry/so.png') },
  { title: 'South Africa', image: require('../../assets/imgCountry/za.png') },
  { title: 'South Georgia and the South Sandwich Islands', image: require('../../assets/imgCountry/gs.png') },
  { title: 'South Korea', image: require('../../assets/imgCountry/kr.png') },
  { title: 'South Sudan', image: require('../../assets/imgCountry/ss.png') },
  { title: 'Spain', image: require('../../assets/imgCountry/es.png') },
  { title: 'Sri Lanka', image: require('../../assets/imgCountry/lk.png') },
  { title: 'Sudan', image: require('../../assets/imgCountry/sd.png') },
  { title: 'Suriname', image: require('../../assets/imgCountry/sr.png') },
  { title: 'Svalbard and Jan Mayen', image: require('../../assets/imgCountry/sj.png') },
  { title: 'Sweden', image: require('../../assets/imgCountry/se.png') },
  { title: 'Switzerland', image: require('../../assets/imgCountry/ch.png') },
  { title: 'Syria', image: require('../../assets/imgCountry/sy.png') },
  { title: 'Taiwan', image: require('../../assets/imgCountry/tw.png') },
  { title: 'Tajikistan', image: require('../../assets/imgCountry/tj.png') },
  { title: 'Tanzania', image: require('../../assets/imgCountry/tz.png') },
  { title: 'Thailand', image: require('../../assets/imgCountry/th.png') },
  { title: 'Togo', image: require('../../assets/imgCountry/tg.png') },
  { title: 'Tokelau', image: require('../../assets/imgCountry/tk.png') },
  { title: 'Tonga', image: require('../../assets/imgCountry/to.png') },
  { title: 'Trinidad and Tobago', image: require('../../assets/imgCountry/tt.png') },
  { title: 'Tunisia', image: require('../../assets/imgCountry/tn.png') },
  { title: 'Turkey', image: require('../../assets/imgCountry/tr.png') },
  { title: 'Turkmenistan', image: require('../../assets/imgCountry/tm.png') },
  { title: 'Turks and Caicos Islands', image: require('../../assets/imgCountry/tc.png') },
  { title: 'Tuvalu', image: require('../../assets/imgCountry/tv.png') },
  { title: 'U.S. Minor Outlying Islands', image: require('../../assets/imgCountry/um.png') },
  { title: 'U.S. Virgin Islands', image: require('../../assets/imgCountry/vi.png') },
  { title: 'Uganda', image: require('../../assets/imgCountry/ug.png') },
  { title: 'Ukraine', image: require('../../assets/imgCountry/ua.png') },
  { title: 'United Arab Emirates', image: require('../../assets/imgCountry/ae.png') },
  { title: 'United Kingdom', image: require('../../assets/imgCountry/gb.png') },
  { title: 'United States', image: require('../../assets/imgCountry/us.png') },
  { title: 'Uruguay', image: require('../../assets/imgCountry/uy.png') },
  { title: 'Uzbekistan', image: require('../../assets/imgCountry/uz.png') },
  { title: 'Vanuatu', image: require('../../assets/imgCountry/vu.png') },
  { title: 'Vatican City', image: require('../../assets/imgCountry/va.png') },
  { title: 'Venezuela', image: require('../../assets/imgCountry/ve.png') },
  { title: 'Vietnam', image: require('../../assets/imgCountry/vn.png') },
  { title: 'Wallis and Futuna', image: require('../../assets/imgCountry/wf.png') },
  { title: 'Western Sahara', image: require('../../assets/imgCountry/eh.png') },
  { title: 'Yemen', image: require('../../assets/imgCountry/ye.png') },
  { title: 'Zambia', image: require('../../assets/imgCountry/zm.png') },
  { title: 'Zimbabwe', image: require('../../assets/imgCountry/zw.png') },
  ]
  
  export default countriesWithFlags;
  