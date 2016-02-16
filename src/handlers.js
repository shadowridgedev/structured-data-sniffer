/*
 *  This file is part of the OpenLink Structured Data Sniffer
 *
 *  Copyright (C) 2015-2016 OpenLink Software
 *
 *  This project is free software; you can redistribute it and/or modify it
 *  under the terms of the GNU General Public License as published by the
 *  Free Software Foundation; only version 2 of the License, dated June 1991.
 *
 *  This program is distributed in the hope that it will be useful, but
 *  WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 *  General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
 *
 */

Namespace = function() {
  this.RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
  this.RDF_TYPE   = this.RDF_PREFIX + 'type';
  this.ns_list = {
    "virtcxml": "http://www.openlinksw.com/schemas/virtcxml#",
     "virtrdf": "http://www.openlinksw.com/schemas/virtrdf#",
     "twitter": "https://dev.twitter.com/cards/markup#",
       "opltw": "http://www.openlinksw.com/schemas/twitter#",
//     "rel": "http://www.iana.org/assignments/relation/",


        // prefixes from => http://prefix.cc/context 
        "yago": "http://yago-knowledge.org/resource/",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "dbo": "http://dbpedia.org/ontology/",
        "dbp": "http://dbpedia.org/property/",
        "dc": "http://purl.org/dc/elements/1.1/",
        "owl": "http://www.w3.org/2002/07/owl#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "ont": "http://purl.org/net/ns/ontology-annot#",
        "geo": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "skos": "http://www.w3.org/2004/02/skos/core#",
        "onto": "http://www.ontotext.com/",
        "rss": "http://purl.org/rss/1.0/",
        "sioc": "http://rdfs.org/sioc/ns#",
        "gldp": "http://www.w3.org/ns/people#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "fb": "http://rdf.freebase.com/ns/",
        "geonames": "http://www.geonames.org/ontology#",
        "sc": "http://purl.org/science/owl/sciencecommons/",
        "org": "http://www.w3.org/ns/org#",
        "dcterms": "http://purl.org/dc/terms/",
        "gr": "http://purl.org/goodrelations/v1#",
        "qb": "http://purl.org/linked-data/cube#",
        "bibo": "http://purl.org/ontology/bibo/",
        "prov": "http://www.w3.org/ns/prov#",
        "commerce": "http://search.yahoo.com/searchmonkey/commerce/",
        "dbpedia": "http://dbpedia.org/resource/",
        "dct": "http://purl.org/dc/terms/",
        "md": "http://www.w3.org/ns/md#",
        "sd": "http://www.w3.org/ns/sparql-service-description#",
        "swrc": "http://swrc.ontoware.org/ontology#",
        "vcard": "http://www.w3.org/2006/vcard/ns#",
        "dcat": "http://www.w3.org/ns/dcat#",
        "dbpprop": "http://dbpedia.org/property/",
        "akt": "http://www.aktors.org/ontology/portal#",
        "void": "http://rdfs.org/ns/void#",
        "vann": "http://purl.org/vocab/vann/",
        "pto": "http://www.productontology.org/id/",
        "dcmit": "http://purl.org/dc/dcmitype/",
        "content": "http://purl.org/rss/1.0/modules/content/",
        "ex": "http://example.org/",
        "doap": "http://usefulinc.com/ns/doap#",
        "event": "http://purl.org/NET/c4dm/event.owl#",
        "swc": "http://data.semanticweb.org/ns/swc/ontology#",
        "cyc": "http://sw.opencyc.org/concept/",
        "fn": "http://www.ontologydesignpatterns.org/ont/framenet/tbox/",
        "xhtml": "http://www.w3.org/1999/xhtml#",
        "schema": "http://schema.org/",
        "aiiso": "http://purl.org/vocab/aiiso/schema#",
        "http": "http://www.w3.org/2011/http#",
        "rr": "http://www.w3.org/ns/r2rml#",
        "cc": "http://creativecommons.org/ns#",
        "wot": "http://xmlns.com/wot/0.1/",
        "nie": "http://www.semanticdesktop.org/ontologies/2007/01/19/nie#",
        "dc11": "http://purl.org/dc/elements/1.1/",
        "gen": "http://www.w3.org/2006/gen/ont#",
        "mo": "http://purl.org/ontology/mo/",
        "ma": "http://www.w3.org/ns/ma-ont#",
        "ical": "http://www.w3.org/2002/12/cal/ical#",
        "bill": "http://www.rdfabout.com/rdf/schema/usbill/",
        "rel": "http://purl.org/vocab/relationship/",
        "d2rq": "http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#",
        "bio": "http://purl.org/vocab/bio/0.1/",
        "test2": "http://this.invalid/test2#",
        "ad": "http://schemas.talis.com/2005/address/schema#",
        "cv": "http://rdfs.org/resume-rdf/",
        "earl": "http://www.w3.org/ns/earl#",
        "og": "http://opengraphprotocol.org/schema/",
        "factbook": "http://wifo5-04.informatik.uni-mannheim.de/factbook/ns#",
        "admin": "http://webns.net/mvcb/",
        "dbr": "http://dbpedia.org/resource/",
        "air": "http://dig.csail.mit.edu/TAMI/2007/amord/air#",
        "vs": "http://www.w3.org/2003/06/sw-vocab-status/ns#",
        "media": "http://purl.org/media#",
        "oo": "http://purl.org/openorg/",
        "log": "http://www.w3.org/2000/10/swap/log#",
        "daia": "http://purl.org/ontology/daia/",
        "co": "http://rhizomik.net/ontologies/copyrightonto.owl#",
        "ctag": "http://commontag.org/ns#",
        "book": "http://purl.org/NET/book/vocab#",
        "tag": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "botany": "http://purl.org/NET/biol/botany#",
        "days": "http://ontologi.es/days#",
        "biblio": "http://purl.org/net/biblio#",
        "dv": "http://rdf.data-vocabulary.org/#",
        "musim": "http://purl.org/ontology/similarity/",
        "dir": "http://schemas.talis.com/2005/dir/schema#",
        "cs": "http://purl.org/vocab/changeset/schema#",
        "rdfg": "http://www.w3.org/2004/03/trix/rdfg-1/",
        "osag": "http://www.ordnancesurvey.co.uk/ontology/AdministrativeGeography/v2.0/AdministrativeGeography.rdf#",
        "dcq": "http://purl.org/dc/qualifiers/1.0/",
        "cal": "http://www.w3.org/2002/12/cal/ical#",
        "ome": "http://purl.org/ontomedia/core/expression#",
        "tzont": "http://www.w3.org/2006/timezone#",
        "afn": "http://jena.hpl.hp.com/ARQ/function#",
        "af": "http://purl.org/ontology/af/",
        "reco": "http://purl.org/reco#",
        "ir": "http://www.ontologydesignpatterns.org/cp/owl/informationrealization.owl#",
        "pc": "http://purl.org/procurement/public-contracts#",
        "cld": "http://purl.org/cld/terms/",
        "xhv": "http://www.w3.org/1999/xhtml/vocab#",
        "xs": "http://www.w3.org/2001/XMLSchema#",
        "rev": "http://purl.org/stuff/rev#",
        "xfn": "http://gmpg.org/xfn/11#",
        "cmp": "http://www.ontologydesignpatterns.org/cp/owl/componency.owl#",
        "rif": "http://www.w3.org/2007/rif#",
        "sr": "http://www.openrdf.org/config/repository/sail#",
        "lomvoc": "http://ltsc.ieee.org/rdf/lomv1p0/vocabulary#",
        "memo": "http://ontologies.smile.deri.ie/2009/02/27/memo#",
        "cfp": "http://sw.deri.org/2005/08/conf/cfp.owl#",
        "giving": "http://ontologi.es/giving#",
        "ok": "http://okkam.org/terms#",
        "sism": "http://purl.oclc.org/NET/sism/0.1/",
        "xf": "http://www.w3.org/2002/xforms/",
        "swande": "http://purl.org/swan/1.2/discourse-elements/",
        "mu": "http://www.kanzaki.com/ns/music#",
        "myspace": "http://purl.org/ontology/myspace#",
        "swanq": "http://purl.org/swan/1.2/qualifiers/",
        "dcn": "http://www.w3.org/2007/uwa/context/deliverycontext.owl#",
        "swrcfe": "http://www.morelab.deusto.es/ontologies/swrcfe#",
        "math": "http://www.w3.org/2000/10/swap/math#",
        "owlim": "http://www.ontotext.com/trree/owlim#",
        "type": "http://info.deepcarbon.net/schema/type#",
        "jdbc": "http://d2rq.org/terms/jdbc/",
        "con": "http://www.w3.org/2000/10/swap/pim/contact#",
        "time": "http://www.w3.org/2006/time#",
        "gn": "http://www.geonames.org/ontology#",
        "frbr": "http://purl.org/vocab/frbr/core#",
        "drugbank": "http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/",
        "spacerel": "http://data.ordnancesurvey.co.uk/ontology/spatialrelations/",
        "swrl": "http://www.w3.org/2003/11/swrl#",
        "cert": "http://www.w3.org/ns/auth/cert#",
        "voaf": "http://purl.org/vocommons/voaf#",
        "swrlb": "http://www.w3.org/2003/11/swrlb#",
        "ac": "http://umbel.org/umbel/ac/",
        "nfo": "http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#",
        "marcrel": "http://id.loc.gov/vocabulary/relators/",
        "cnt": "http://www.w3.org/2011/content#",
        "sioct": "http://rdfs.org/sioc/types#",
        "sider": "http://www4.wiwiss.fu-berlin.de/sider/resource/sider/",
        "wn20schema": "http://www.w3.org/2006/03/wn/wn20/schema/",
        "movie": "http://data.linkedmdb.org/resource/movie/",
        "omn": "http://open-multinet.info/ontology/omn#",
        "xtypes": "http://purl.org/xtypes/",
        "rsa": "http://www.w3.org/ns/auth/rsa#",
        "adms": "http://www.w3.org/ns/adms#",
        "ov": "http://open.vocab.org/terms/",
        "akts": "http://www.aktors.org/ontology/support#",
        "dcterm": "http://purl.org/dc/terms/",
        "db": "http://dbpedia.org/",
        "lgd": "http://linkedgeodata.org/triplify/",
        "loc": "http://www.w3.org/2007/uwa/context/location.owl#",
        "service": "http://purl.org/ontology/service#",
        "isbd": "http://iflastandards.info/ns/isbd/elements/",
        "crm": "http://www.cidoc-crm.org/cidoc-crm/",
        "acm": "http://www.rkbexplorer.com/ontologies/acm#",
        "sf": "http://www.opengis.net/ont/sf#",
        "test": "http://test2.example.com/",
        "po": "http://purl.org/ontology/po/",
        "prv": "http://purl.org/net/provenance/ns#",
        "uniprot": "http://purl.uniprot.org/core/",
        "prism": "http://prismstandard.org/namespaces/basic/2.0/",
        "ore": "http://www.openarchives.org/ore/terms/",
        "wn": "http://xmlns.com/wordnet/1.6/",
        "acc": "http://purl.org/NET/acc#",
        "oa": "http://www.w3.org/ns/oa#",
        "madsrdf": "http://www.loc.gov/mads/rdf/v1#",
        "sdmx": "http://purl.org/linked-data/sdmx#",
        "daml": "http://www.daml.org/2001/03/daml+oil#",
        "zoology": "http://purl.org/NET/biol/zoology#",
        "geosparql": "http://www.opengis.net/ont/geosparql#",
        "dcam": "http://purl.org/dc/dcam/",
        "pmlj": "http://inference-web.org/2.0/pml-justification.owl#",
        "granatum": "http://chem.deri.ie/granatum/",
        "tl": "http://purl.org/NET/c4dm/timeline.owl#",
        "pr": "http://purl.org/ontology/prv/core#",
        "ndl": "http://schemas.ogf.org/nml/2013/05/base#",
        "link": "http://www.w3.org/2006/link#",
        "wo": "http://purl.org/ontology/wo/",
        "ptr": "http://www.w3.org/2009/pointers#",
        "music": "http://musicontology.com/",
        "acl": "http://www.w3.org/ns/auth/acl#",
        "abc": "http://www.metadata.net/harmony/ABCSchemaV5Commented.rdf#",
        "biocore": "http://bio2rdf.org/core#",
        "scovo": "http://purl.org/NET/scovo#",
        "ldp": "http://www.w3.org/ns/ldp#",
        "unit": "http://qudt.org/vocab/unit#",
        "core": "http://vivoweb.org/ontology/core#",
        "dbpediaowl": "http://dbpedia.org/owl/",
        "umbel": "http://umbel.org/umbel#",
        "lode": "http://linkedevents.org/ontology/",
        "tmo": "http://www.semanticdesktop.org/ontologies/2008/05/20/tmo#",
        "space": "http://purl.org/net/schemas/space/",
        "room": "http://vocab.deri.ie/rooms#",
        "nsogi": "http://prefix.cc/nsogi:",
        "java": "http://www.w3.org/2007/uwa/context/java.owl#",
        "politico": "http://www.rdfabout.com/rdf/schema/politico/",
        "ya": "http://blogs.yandex.ru/schema/foaf/",
        "whois": "http://www.kanzaki.com/ns/whois#",
        "protege": "http://protege.stanford.edu/system#",
        "omt": "http://purl.org/ontomedia/ext/common/trait#",
        "taxo": "http://purl.org/rss/1.0/modules/taxonomy/",
        "bio2rdf": "http://bio2rdf.org/",
        "eg": "http://eulergui.sourceforge.net/engine.owl#",
        "skosxl": "http://www.w3.org/2008/05/skos-xl#",
        "scot": "http://rdfs.org/scot/ns#",
        "sp": "http://spinrdf.org/sp#",
        "exif": "http://www.w3.org/2003/12/exif/ns#",
        "mit": "http://purl.org/ontology/mo/mit#",
        "oauth": "http://demiblog.org/vocab/oauth#",
        "atom": "http://www.w3.org/2005/Atom/",
        "fresnel": "http://www.w3.org/2004/09/fresnel#",
        "ti": "http://www.ontologydesignpatterns.org/cp/owl/timeinterval.owl#",
        "wdrs": "http://www.w3.org/2007/05/powder-s#",
        "user": "http://schemas.talis.com/2005/user/schema#",
        "compass": "http://purl.org/net/compass#",
        "usgov": "http://www.rdfabout.com/rdf/schema/usgovt/",
        "rnews": "http://iptc.org/std/rNews/2011-10-07#",
        "bf": "http://bibframe.org/vocab/",
        "chord": "http://purl.org/ontology/chord/",
        "rec": "http://purl.org/ontology/rec/core#",
        "dce": "http://purl.org/dc/elements/1.1/",
        "courseware": "http://courseware.rkbexplorer.com/ontologies/courseware#",
        "doc": "http://www.w3.org/2000/10/swap/pim/doc#",
        "rep": "http://www.openrdf.org/config/repository#",
        "omb": "http://purl.org/ontomedia/ext/common/being#",
        "spin": "http://spinrdf.org/spin#",
        "bibtex": "http://purl.oclc.org/NET/nknouf/ns/bibtex#",
        "lfm": "http://purl.org/ontology/last-fm/",
        "admingeo": "http://data.ordnancesurvey.co.uk/ontology/admingeo/",
        "dctype": "http://purl.org/dc/dcmitype/",
        "iswc": "http://annotation.semanticweb.org/2004/iswc#",
        "irw": "http://www.ontologydesignpatterns.org/ont/web/irw.owl#",
        "atomix": "http://buzzword.org.uk/rdf/atomix#",
        "lv": "http://purl.org/lobid/lv#",
        "formats": "http://www.w3.org/ns/formats/",
        "resource": "http://purl.org/vocab/resourcelist/schema#",
        "fec": "http://www.rdfabout.com/rdf/schema/usfec/",
        "so": "http://purl.org/ontology/symbolic-music/",
        "nao": "http://www.semanticdesktop.org/ontologies/2007/08/15/nao#",
        "vote": "http://www.rdfabout.com/rdf/schema/vote/",
        "powder": "http://www.w3.org/2007/05/powder#",
        "doac": "http://ramonantonio.net/doac/0.1/#",
        "dailymed": "http://www4.wiwiss.fu-berlin.de/dailymed/resource/dailymed/",
        "rei": "http://www.w3.org/2004/06/rei#",
        "geoes": "http://geo.linkeddata.es/ontology/",
        "irrl": "http://www.ontologydesignpatterns.org/cp/owl/informationobjectsandrepresentationlanguages.owl#",
        "ecs": "http://rdf.ecs.soton.ac.uk/ontology/ecs#",
        "spl": "http://spinrdf.org/spl#",
        "sede": "http://eventography.org/sede/0.1/",
        "wordmap": "http://purl.org/net/ns/wordmap#",
        "imm": "http://schemas.microsoft.com/imm/",
        "hcterms": "http://purl.org/uF/hCard/terms/",
        "nco": "http://www.semanticdesktop.org/ontologies/2007/03/22/nco#",
        "opm": "http://openprovenance.org/ontology#",
        "dul": "http://www.loa-cnr.it/ontologies/DUL.owl#",
        "copyright": "http://rhizomik.net/ontologies/copyrightonto.owl#",
        "audio": "http://purl.org/media/audio#",
        "go": "http://purl.org/obo/owl/GO#",
        "resex": "http://resex.rkbexplorer.com/ontologies/resex#",
        "prj": "http://purl.org/stuff/project/",
        "affy": "http://www.affymetrix.com/community/publications/affymetrix/tmsplice#",
        "wgs84": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "coref": "http://www.rkbexplorer.com/ontologies/coref#",
        "dblp": "http://dblp.uni-trier.de/rdf/schema-2015-01-26#",
        "lx": "http://purl.org/NET/lx#",
        "kwijibo": "http://kwijibo.talis.com/",
        "nrl": "http://www.semanticdesktop.org/ontologies/2007/08/15/nrl#",
        "lingvoj": "http://www.lingvoj.org/ontology#",
        "gd": "http://rdf.data-vocabulary.org/#",
        "ssn": "http://purl.oclc.org/NET/ssnx/ssn#",
        "lfn": "http://www.dotnetrdf.org/leviathan#",
        "kb": "http://deductions.sf.net/ontology/knowledge_base.owl#",
        "os": "http://www.w3.org/2000/10/swap/os#",
        "xen": "http://buzzword.org.uk/rdf/xen#",
        "xro": "http://purl.org/xro/ns#",
        "biol": "http://purl.org/NET/biol/ns#",
        "video": "http://purl.org/media/video#",
        "climb": "http://climb.dataincubator.org/vocabs/climb/",
        "p3p": "http://www.w3.org/2002/01/p3prdfv1#",
        "resist": "http://www.rkbexplorer.com/ontologies/resist#",
        "label": "http://purl.org/net/vocab/2004/03/label#",
        "contact": "http://www.w3.org/2000/10/swap/pim/contact#",
        "lastfm": "http://purl.org/ontology/last-fm/",
        "lifecycle": "http://purl.org/vocab/lifecycle/schema#",
        "sesame": "http://www.openrdf.org/schema/sesame#",
        "meetup": "http://www.lotico.com/meetup/",
        "nexif": "http://www.semanticdesktop.org/ontologies/2007/05/10/nexif#",
        "spc": "http://purl.org/ontomedia/core/space#",
        "code": "http://telegraphis.net/ontology/measurement/code#",
        "cito": "http://purl.org/spar/cito/",
        "sdl": "http://purl.org/vocab/riro/sdl#",
        "nmo": "http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#",
        "wv": "http://vocab.org/waiver/terms/",
        "moat": "http://moat-project.org/ns#",
        "ddc": "http://purl.org/NET/decimalised#",
        "eztag": "http://ontologies.ezweb.morfeo-project.org/eztag/ns#",
        "omc": "http://purl.org/ontomedia/ext/common/bestiary#",
        "swandr": "http://purl.org/swan/1.2/discourse-relationships/",
        "meteo": "http://purl.org/ns/meteo#",
        "omp": "http://purl.org/ontomedia/ext/common/profession#",
        "tags": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "doclist": "http://www.junkwork.net/xml/DocumentList#",
        "opensearch": "http://a9.com/-/spec/opensearch/1.1/",
        "ne": "http://umbel.org/umbel/ne/",
        "fabio": "http://purl.org/spar/fabio/",
        "money": "http://purl.org/net/rdf-money/",
        "pmlp": "http://inference-web.org/2.0/pml-provenance.owl#",
        "prissma": "http://ns.inria.fr/prissma/v1#",
        "myspo": "http://purl.org/ontology/myspace#",
        "sit": "http://www.ontologydesignpatterns.org/cp/owl/situation.owl#",
        "sail": "http://www.openrdf.org/config/sail#",
        "ngeo": "http://geovocab.org/geometry#",
        "swanqs": "http://purl.org/swan/1.2/qualifiers/",
        "hlisting": "http://sindice.com/hlisting/0.1/",
        "ignf": "http://data.ign.fr/def/ignf#",
        "rdfa": "http://www.w3.org/ns/rdfa#",
        "lotico": "http://www.lotico.com/resource/",
        "xhe": "http://buzzword.org.uk/rdf/xhtml-elements#",
        "phss": "http://ns.poundhill.com/phss/1.0/",
        "sparql": "http://ontologi.es/sparql#",
        "ncal": "http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#",
        "lyou": "http://purl.org/linkingyou/",
        "ibis": "http://purl.org/ibis#",
        "ire": "http://www.ontologydesignpatterns.org/cpont/ire.owl#",
        "hard": "http://www.w3.org/2007/uwa/context/hardware.owl#",
        "swp": "http://www.w3.org/2004/03/trix/swp-2/",
        "trackback": "http://madskills.com/public/xml/rss/module/trackback/",
        "meta": "http://www.openrdf.org/rdf/2009/metadata#",
        "dbprop": "http://dbpedia.org/property/",
        "es": "http://eulersharp.sourceforge.net/2003/03swap/log-rules#",
        "web": "http://www.w3.org/2007/uwa/context/web.owl#",
        "cco": "http://purl.org/ontology/cco/core#",
        "h5": "http://buzzword.org.uk/rdf/h5#",
        "sec": "https://w3id.org/security#",
        "custom": "http://www.openrdf.org/config/sail/custom#",
        "c4n": "http://vocab.deri.ie/c4n#",
        "smiley": "http://www.smileyontology.com/ns#",
        "gpt": "http://purl.org/vocab/riro/gpt#",
        "gold": "http://purl.org/linguistics/gold/",
        "lang": "http://ontologi.es/lang/core#",
        "airport": "http://www.daml.org/2001/10/html/airport-ont#",
        "food": "http://purl.org/foodontology#",
        "product": "http://purl.org/commerce/product#",
        "grddl": "http://www.w3.org/2003/g/data-view#",
        "obj": "http://www.openrdf.org/rdf/2009/object#",
        "am": "http://vocab.deri.ie/am#",
        "wdr": "http://www.w3.org/2007/05/powder#",
        "cycann": "http://sw.cyc.com/CycAnnotations_v1#",
        "lom": "http://ltsc.ieee.org/rdf/lomv1p0/lom#",
        "omm": "http://purl.org/ontomedia/core/media#",
        "ddl": "http://purl.org/vocab/riro/ddl#",
        "mysql": "http://web-semantics.org/ns/mysql/",
        "smf": "http://topbraid.org/sparqlmotionfunctions#",
        "tripfs": "http://purl.org/tripfs/2010/02#",
        "bsbm": "http://www4.wiwiss.fu-berlin.de/bizer/bsbm/v01/vocabulary/",
        "net": "http://www.w3.org/2007/uwa/context/network.owl#",
        "wnschema": "http://www.cogsci.princeton.edu/~wn/schema/",
        "scv": "http://purl.org/NET/scovo#",
        "sim": "http://purl.org/ontology/similarity/",
        "tdb": "http://jena.hpl.hp.com/2008/tdb#",
        "b2bo": "http://purl.org/b2bo#",
        "dcmitype": "http://purl.org/dc/dcmitype/",
        "pmt": "http://tipsy.googlecode.com/svn/trunk/vocab/pmt#",
        "like": "http://ontologi.es/like#",
        "common": "http://www.w3.org/2007/uwa/context/common.owl#",
        "xl": "http://langegger.at/xlwrap/vocab#",
        "sv": "http://schemas.talis.com/2005/service/schema#",
        "swivt": "http://semantic-mediawiki.org/swivt/1.0#",
        "tio": "http://purl.org/tio/ns#",
        "pmlr": "http://inference-web.org/2.0/pml-relation.owl#",
        "fed": "http://www.openrdf.org/config/sail/federation#",
        "opo": "http://online-presence.net/opo/ns#",
        "mf": "http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#",
        "ping": "http://purl.org/net/pingback/",
        "xforms": "http://www.w3.org/2002/xforms/",
        "nid3": "http://www.semanticdesktop.org/ontologies/2007/05/10/nid3#",
        "umbelrc": "http://umbel.org/umbel/rc/",
        "qdoslf": "http://foaf.qdos.com/lastfm/schema/",
        "list": "http://www.w3.org/2000/10/swap/list#",
        "swh": "http://plugin.org.uk/swh-plugins/",
        "puc": "http://purl.org/NET/puc#",
        "ao": "http://purl.org/ontology/ao/core#",
        "ezcontext": "http://ontologies.ezweb.morfeo-project.org/ezcontext/ns#",
        "sml": "http://topbraid.org/sparqlmotionlib#",
        "oc": "http://opencoinage.org/rdf/",
        "osgb": "http://data.ordnancesurvey.co.uk/id/",
        "lt": "http://diplomski.nelakolundzija.org/LTontology.rdf#",
        "states": "http://www.w3.org/2005/07/aaa#",
        "frbre": "http://purl.org/vocab/frbr/extended#",
        "dummy": "http://hello.com/",
        "bib": "http://zeitkunst.org/bibtex/0.1/bibtex.owl#",
        "crypto": "http://www.w3.org/2000/10/swap/crypto#",
        "ttl": "http://www.w3.org/2008/turtle#",
        "gob": "http://purl.org/ontology/last-fm/",
        "profiling": "http://ontologi.es/profiling#",
        "psych": "http://purl.org/vocab/psychometric-profile/",
        "osoc": "http://web-semantics.org/ns/opensocial#",
        "swanco": "http://purl.org/swan/1.2/swan-commons/",
        "evset": "http://dsnotify.org/vocab/eventset/0.1/",
        "sawsdl": "http://www.w3.org/ns/sawsdl#",
        "string": "http://www.w3.org/2000/10/swap/string#",
        "push": "http://www.w3.org/2007/uwa/context/push.owl#",
        "awol": "http://bblfish.net/work/atom-owl/2006-06-06/#",
        "ct": "http://data.linkedct.org/resource/linkedct/",
        "dady": "http://purl.org/NET/dady#",
        "edm": "http://www.europeana.eu/schemas/edm/",
        "oat": "http://openlinksw.com/schemas/oat/",
        "library": "http://purl.org/library/",
        "ldap": "http://purl.org/net/ldap/",
        "swid": "http://semanticweb.org/id/",
        "conserv": "http://conserv.deri.ie/ontology#",
        "nif": "http://persistence.uni-leipzig.org/nlp2rdf/ontologies/nif-core#",
        "ro": "http://purl.org/wf4ever/ro#",
        "wgs": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "conv": "http://purl.org/twc/vocab/conversion/",
        "ps": "https://w3id.org/payswarm#",
        "aifb": "http://www.aifb.kit.edu/id/",
        "game": "http://data.totl.net/game/",
        "timeline": "http://purl.org/NET/c4dm/timeline.owl#",
        "bookmark": "http://www.w3.org/2002/01/bookmark#",
        "site": "http://ns.ontowiki.net/SysOnt/Site/",
        "sport": "http://www.bbc.co.uk/ontologies/sport/",
        "swanpav": "http://purl.org/swan/1.2/pav/",
        "imreg": "http://www.w3.org/2004/02/image-regions#",
        "geographis": "http://telegraphis.net/ontology/geography/geography#",
        "okkam": "http://models.okkam.org/ENS-core-vocabulary#",
        "plink": "http://buzzword.org.uk/rdf/personal-link-types#",
        "freebase": "http://rdf.freebase.com/ns/",
        "urn": "http://fliqz.com/",
        "acco": "http://purl.org/acco/ns#",
        "sm": "http://topbraid.org/sparqlmotion#",
        "dbpp": "http://dbpedia.org/property/",
        "coin": "http://purl.org/court/def/2009/coin#",
        "swanag": "http://purl.org/swan/1.2/agents/",
        "ref": "http://purl.org/vocab/relationship/",
        "httph": "http://www.w3.org/2007/ont/httph#",
        "swanci": "http://purl.org/swan/1.2/citations/",
        "isi": "http://purl.org/ontology/is/inst/",
        "soft": "http://www.w3.org/2007/uwa/context/software.owl#",
        "postcode": "http://data.ordnancesurvey.co.uk/id/postcodeunit/",
        "sysont": "http://ns.ontowiki.net/SysOnt/",
        "xhtmlvocab": "http://www.w3.org/1999/xhtml/vocab/",
        "lark1": "http://users.utcluj.ro/~raluca/ontology/Ontology1279614123500.owl#",
        "wairole": "http://www.w3.org/2005/01/wai-rdf/GUIRoleTaxonomy#",
        "wisski": "http://wiss-ki.eu/",
        "pimo": "http://www.semanticdesktop.org/ontologies/2007/11/01/pimo#",
        "opus": "http://lsdis.cs.uga.edu/projects/semdis/opus#",
        "xesam": "http://freedesktop.org/standards/xesam/1.0/core#",
        "muto": "http://purl.org/muto/core#",
        "rooms": "http://vocab.deri.ie/rooms#",
        "txn": "http://lod.taxonconcept.org/ontology/txn.owl#",
        "uri": "http://purl.org/NET/uri#",
        "rulz": "http://purl.org/NET/rulz#",
        "anca": "http://users.utcluj.ro/~raluca/rdf_ontologies_ralu/ralu_modified_ontology_pizzas2_0#",
        "play": "http://uriplay.org/spec/ontology/#",
        "icaltzd": "http://www.w3.org/2002/12/cal/icaltzd#",
        "evopat": "http://ns.aksw.org/Evolution/",
        "ist": "http://purl.org/ontology/is/types/",
        "yoda": "http://purl.org/NET/yoda#",
        "interval": "http://reference.data.gov.uk/def/intervals/",
        "act": "http://www.w3.org/2007/rif-builtin-action#",
        "pgterms": "http://www.gutenberg.org/2009/pgterms/",
        "sioca": "http://rdfs.org/sioc/actions#",
        "sio": "http://semanticscience.org/resource/",
        "olo": "http://purl.org/ontology/olo/core#",
        "remus": "http://www.semanticweb.org/ontologies/2010/6/Ontology1279614123500.owl#",
        "cpv": "http://purl.org/weso/cpv/",
        "lvont": "http://lexvo.org/ontology#",
        "georss": "http://www.georss.org/georss/",
        "openlinks": "http://www.openlinksw.com/schemas/virtrdf#",
        "places": "http://purl.org/ontology/places#",
        "gml": "http://www.opengis.net/ont/gml#",
        "pobo": "http://purl.obolibrary.org/obo/",
        "eprints": "http://eprints.org/ontology/",
        "aat": "http://vocab.getty.edu/aat/",
        "isq": "http://purl.org/ontology/is/quality/",
        "linkedct": "http://data.linkedct.org/vocab/",
        "lgdo": "http://linkedgeodata.org/ontology/",
        "lemon": "http://lemon-model.net/lemon#",
        "sl": "http://www.semanlink.net/2001/00/semanlink-schema#",
        "geospecies": "http://rdf.geospecies.org/ont/geospecies#",
        "xbrli": "http://www.xbrl.org/2003/instance#",
        "pdo": "http://ontologies.smile.deri.ie/pdo#",
        "dnr": "http://www.dotnetrdf.org/configuration#",
        "pmlt": "http://inference-web.org/2.0/pml-trust.owl#",
        "ean": "http://openean.kaufkauf.net/id/",
        "conversion": "http://purl.org/twc/vocab/conversion/",
        "status": "http://ontologi.es/status#",
        "agents": "http://eulersharp.sourceforge.net/2003/03swap/agent#",
        "dayta": "http://dayta.me/resource#",
        "prot": "http://www.proteinontology.info/po.owl#",
        "prvtypes": "http://purl.org/net/provenance/types#",
        "lp": "http://launchpad.net/rdf/launchpad#",
        "drug": "http://www.agfa.com/w3c/2009/drugTherapy#",
        "biopax": "http://www.biopax.org/release/biopax-level3.owl#",
        "eu": "http://eulersharp.sourceforge.net/2003/03swap/log-rules#",
        "tarot": "http://data.totl.net/tarot/card/",
        "derecho": "http://purl.org/derecho#",
        "search": "http://sindice.com/vocab/search#",
        "w3p": "http://prov4j.org/w3p/",
        "oboro": "http://obofoundry.org/ro/ro.owl#",
        "phil": "http://philosurfical.open.ac.uk/ontology/philosurfical.owl#",
        "opmv": "http://purl.org/net/opmv/ns#",
        "dgfoaf": "http://west.uni-koblenz.de/ontologies/2010/07/dgfoaf.owl#",
        "gridworks": "http://purl.org/net/opmv/types/gridworks#",
        "wlp": "http://weblab-project.org/core/model/property/processing/",
        "httpvoc": "http://www.w3.org/2006/http#",
        "ui": "http://www.w3.org/ns/ui#",
        "sco": "http://purl.org/ontology/sco#",
        "muo": "http://purl.oclc.org/NET/muo/muo#",
        "rdagr1": "http://rdvocab.info/Elements/",
        "address": "http://schemas.talis.com/2005/address/schema#",
        "gso": "http://www.w3.org/2006/gen/ont#",
        "session": "http://redfoot.net/2005/session#",
        "gnd": "http://d-nb.info/gnd/",
        "arpfo": "http://vocab.ouls.ox.ac.uk/projectfunding#",
        "loticoowl": "http://www.lotico.com/ontology/",
        "nsa": "http://multimedialab.elis.ugent.be/organon/ontologies/ninsuna#",
        "vsr": "http://purl.org/twc/vocab/vsr#",
        "cdm": "http://purl.org/twc/ontology/cdm.owl#",
        "organism": "http://eulersharp.sourceforge.net/2003/03swap/organism#",
        "rail": "http://ontologi.es/rail/vocab#",
        "is": "http://purl.org/ontology/is/core#",
        "arch": "http://purl.org/archival/vocab/arch#",
        "posh": "http://poshrdf.org/ns/posh/",
        "gv": "http://rdf.data-vocabulary.org/#",
        "sindice": "http://vocab.sindice.net/",
        "cgov": "http://reference.data.gov.uk/def/central-government/",
        "wgspos": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "languages": "http://eulersharp.sourceforge.net/2003/03swap/languages#",
        "webtlab": "http://webtlab.it.uc3m.es/",
        "dbnary": "http://kaiko.getalp.org/dbnary#",
        "nt": "http://ns.inria.fr/nicetag/2010/09/09/voc#",
        "cos": "http://www.inria.fr/acacia/corese#",
        "apivc": "http://purl.org/linked-data/api/vocab#",
        "qudt": "http://qudt.org/1.1/schema/qudt#",
        "pbo": "http://purl.org/ontology/pbo/core#",
        "human": "http://eulersharp.sourceforge.net/2003/03swap/human#",
        "agetec": "http://www.agetec.org/",
        "rov": "http://www.w3.org/ns/regorg#",
        "enc": "http://www.w3.org/2001/04/xmlenc#",
        "organiz": "http://eulersharp.sourceforge.net/2003/03swap/organization#",
        "res": "http://www.w3.org/2005/sparql-results#",
        "r2r": "http://www4.wiwiss.fu-berlin.de/bizer/r2r/",
        "countries": "http://eulersharp.sourceforge.net/2003/03swap/countries#",
        "req": "http://purl.org/req/",
        "healthcare": "http://www.agfa.com/w3c/2009/healthCare#",
        "rdrel": "http://rdvocab.info/RDARelationshipsWEMI/",
        "zbwext": "http://zbw.eu/namespaces/zbw-extensions/",
        "fab": "http://purl.org/fab/ns#",
        "s4ac": "http://ns.inria.fr/s4ac/v2#",
        "ufmedia": "http://purl.org/microformat/hmedia/",
        "com": "http://purl.org/commerce#",
        "dso": "http://purl.org/ontology/dso#",
        "opwn": "http://www.ontologyportal.org/WordNet.owl#",
        "card": "http://www.ashutosh.com/test/",
        "xfnv": "http://vocab.sindice.com/xfn#",
        "bif": "http://www.openlinksw.com/schemas/bif#",
        "person": "http://www.w3.org/ns/person#",
        "npg": "http://ns.nature.com/terms/",
        "geodata": "http://sws.geonames.org/",
        "linkedmdb": "http://data.linkedmdb.org/sparql/",
        "dwc": "http://rs.tdwg.org/dwc/terms/",
        "payment": "http://reference.data.gov.uk/def/payment#",
        "xsl": "http://www.w3.org/1999/XSL/Transform#",
        "wordnet": "http://purl.org/vocabularies/princeton/wordnet/schema#",
        "quak": "http://dev.w3.org/cvsweb/2000/quacken/vocab#",
        "protons": "http://proton.semanticweb.org/2005/04/protons#",
        "vso": "http://purl.org/vso/ns#",
        "care": "http://eulersharp.sourceforge.net/2003/03swap/care#",
        "ass": "http://uptheasset.org/ontology#",
        "disco": "http://rdf-vocabulary.ddialliance.org/discovery#",
        "idemo": "http://rdf.insee.fr/def/demo#",
        "aair": "http://xmlns.notu.be/aair#",
        "pml": "http://provenanceweb.org/ns/pml#",
        "vitro": "http://vitro.mannlib.cornell.edu/ns/vitro/public#",
        "ceo": "http://www.ebusiness-unibw.org/ontologies/consumerelectronics/v1#",
        "obo": "http://purl.obolibrary.org/obo/",
        "mygrid": "http://www.mygrid.org.uk/ontology#",
        "metalex": "http://www.metalex.eu/schema/1.0#",
        "nndsr": "http://semanticdiet.com/schema/usda/nndsr/",
        "kontakt": "http://richard.cyganiak.de/",
        "bioskos": "http://eulersharp.sourceforge.net/2003/03swap/bioSKOSSchemes#",
        "govwild": "http://govwild.org/0.6/GWOntology.rdf/",
        "events": "http://eulersharp.sourceforge.net/2003/03swap/event#",
        "uni": "http://purl.org/weso/uni/uni.html#",
        "nocal": "http://vocab.deri.ie/nocal#",
        "c4o": "http://purl.org/spar/c4o/",
        "elog": "http://eulersharp.sourceforge.net/2003/03swap/log-rules#",
        "genab": "http://eulersharp.sourceforge.net/2003/03swap/genomeAbnormality#",
        "bte": "http://purl.org/twc/vocab/between-the-edges/",
        "cube": "http://purl.org/linked-data/cube#",
        "dita": "http://purl.org/dita/ns#",
        "hemogram": "http://www.agfa.com/w3c/2009/hemogram#",
        "toby": "http://tobyinkster.co.uk/#",
        "esd": "http://def.esd.org.uk/",
        "datafaqs": "http://purl.org/twc/vocab/datafaqs#",
        "cidoc": "http://erlangen-crm.org/current/",
        "provenir": "http://knoesis.wright.edu/provenir/provenir.owl#",
        "itsrdf": "http://www.w3.org/2005/11/its/rdf#",
        "marl": "http://www.gsi.dit.upm.es/ontologies/marl/ns#",
        "eco": "http://www.ebusiness-unibw.org/ontologies/eclass/5.1.4/#",
        "odp": "http://ontologydesignpatterns.org/",
        "gsp": "http://www.opengis.net/ont/geosparql#",
        "ero": "http://purl.obolibrary.org/obo/",
        "gc": "http://www.oegov.org/core/owl/gc#",
        "dgtwc": "http://data-gov.tw.rpi.edu/2009/data-gov-twc.rdf#",
        "decl": "http://www.linkedmodel.org/1.0/schema/decl#",
        "xds": "http://www.w3.org/2001/XMLSchema#",
        "name": "http://example.org/name#",
        "ccom": "http://purl.org/ontology/cco/mappings#",
        "dco": "http://info.deepcarbon.net/schema#",
        "humanbody": "http://eulersharp.sourceforge.net/2003/03swap/humanBody#",
        "cordis": "http://www4.wiwiss.fu-berlin.de/cordis/resource/cordis/",
        "eat": "http://www.awesomesauce.net/urmom/",
        "voag": "http://voag.linkedmodel.org/schema/voag#",
        "viaf": "http://viaf.org/ontology/1.1/#",
        "pro": "http://purl.org/hpi/patchr#",
        "gelo": "http://krauthammerlab.med.yale.edu/ontologies/gelo#",
        "ocd": "http://dati.camera.it/ocd/",
        "example": "http://www.example.org/rdf#",
        "edam": "http://purl.bioontology.org/ontology/EDAM/",
        "ann": "http://www.w3.org/2000/10/annotation-ns#",
        "clinproc": "http://www.agfa.com/w3c/2009/clinicalProcedure#",
        "hydra": "http://www.w3.org/ns/hydra/core#",
        "visit": "http://purl.org/net/vocab/2004/07/visit#",
        "dnb": "http://d-nb.info/gnd/",
        "dbc": "http://dbpedia.org/resource/Category:",
        "zem": "http://s.zemanta.com/ns#",
        "units": "http://eulersharp.sourceforge.net/2003/03swap/unitsExtension#",
        "skip": "http://skipforward.net/skipforward/resource/",
        "br": "http://vocab.deri.ie/br#",
        "hartigprov": "http://purl.org/net/provenance/ns#",
        "fowl": "http://www.w3.org/TR/2003/PR-owl-guide-20031209/food#",
        "cmo": "http://purl.org/twc/ontologies/cmo.owl#",
        "hospital": "http://www.agfa.com/w3c/2009/hospital#",
//??        "prefix": "http://prefix.cc/",
        "oboso": "http://purl.org/obo/owl/SO#",
        "aneo": "http://akonadi-project.org/ontologies/aneo#",
        "ospost": "http://data.ordnancesurvey.co.uk/ontology/postcode/",
        "clineva": "http://www.agfa.com/w3c/2009/clinicalEvaluation#",
        "agent": "http://eulersharp.sourceforge.net/2003/03swap/agent#",
        "environ": "http://eulersharp.sourceforge.net/2003/03swap/environment#",
        "oboe": "http://ecoinformatics.org/oboe/oboe.1.0/oboe-core.owl#",
        "wai": "http://purl.org/wai#",
        "xkos": "http://rdf-vocabulary.ddialliance.org/xkos#",
        "muni": "http://vocab.linkeddata.es/urbanismo-infraestructuras/territorio#",
        "pf": "http://jena.hpl.hp.com/ARQ/property#",
        "cidoccrm": "http://purl.org/NET/cidoc-crm/core#",
        "mods": "http://www.loc.gov/mods/v3#",
        "kdo": "http://kdo.render-project.eu/kdo#",
        "malignneo": "http://www.agfa.com/w3c/2009/malignantNeoplasm#",
        "oslc": "http://open-services.net/ns/core#",
        "tei": "http://www.tei-c.org/ns/1.0/",
        "arecipe": "http://purl.org/amicroformat/arecipe/",
        "prog": "http://purl.org/prog/",
        "fise": "http://fise.iks-project.eu/ontology/",
        "rda": "http://www.rdaregistry.info/",
        "prvr": "http://purl.org/ontology/prv/rules#",
        "commons": "http://commons.psi.enakting.org/def/",
        "theatre": "http://purl.org/theatre#",
        "olia": "http://purl.org/olia/olia.owl#",
        "igeo": "http://rdf.insee.fr/def/geo#",
        "lod2": "http://lod2.eu/schema/",
        "wao": "http://webtlab.it.uc3m.es/2010/10/WebAppsOntology#",
        "cerif": "http://spi-fm.uca.es/neologism/cerif#",
        "wd": "http://www.wikidata.org/entity/",
        "transmed": "http://www.w3.org/2001/sw/hcls/ns/transmed/",
        "semtweet": "http://semantictweet.com/",
        "cogs": "http://vocab.deri.ie/cogs#",
        "isothes": "http://purl.org/iso25964/skos-thes#",
        "category": "http://dbpedia.org/resource/Category:",
        "uco": "http://purl.org/uco/ns#",
        "out": "http://ontologies.hypios.com/out#",
        "spatial": "http://geovocab.org/spatial#",
        "span": "http://www.ifomis.org/bfo/1.1/span#",
        "dtype": "http://www.linkedmodel.org/schema/dtype#",
        "bd": "http://www.bigdata.com/rdf#",
        "scowt": "http://purl.org/weso/ontologies/scowt#",
        "atomowl": "http://bblfish.net/work/atom-owl/2006-06-06/#",
        "pom": "http://maven.apache.org/POM/4.0.0#",
        "bcnnorms": "http://datos.bcn.cl/ontologies/bcn-norms#",
        "govtrackus": "http://www.rdfabout.com/rdf/usgov/geo/us/",
        "aapi": "http://rdf.alchemyapi.com/rdf/v1/s/aapi-schema#",
        "coo": "http://purl.org/coo/ns#",
        "owls": "http://www.daml.org/services/owl-s/1.2/Service.owl#",
        "ogp": "http://ogp.me/ns#",
        "ppo": "http://vocab.deri.ie/ppo#",
        "oac": "http://www.openannotation.org/ns/",
        "mei": "http://www.music-encoding.org/ns/mei/",
        "hints2005": "http://purl.org/twc/cabig/model/HINTS2005-1.owl#",
        "cpm": "http://catalogus-professorum.org/cpm/",
        "rlog": "http://persistence.uni-leipzig.org/nlp2rdf/ontologies/rlog#",
        "tcga": "http://purl.org/tcga/core#",
        "oax": "http://www.w3.org/ns/openannotation/extensions/",
        "dbpo": "http://dbpedia.org/ontology/",
        "rating": "http://www.tvblob.com/ratings/#",
        "pos": "http://www.w3.org/2003/01/geo/wgs84_pos#",
        "mpeg7": "http://rhizomik.net/ontologies/2005/03/Mpeg7-2001.owl#",
        "sioctypes": "http://rdfs.org/sioc/types#",
        "pccz": "http://purl.org/procurement/public-contracts-czech#",
        "gazetteer": "http://data.ordnancesurvey.co.uk/ontology/50kGazetteer/",
        "ekaw": "http://data.semanticweb.org/conference/ekaw/2012/complete/",
        "efo": "http://www.ebi.ac.uk/efo/",
        "bne": "http://datos.bne.es/resource/",
        "eye": "http://jena.hpl.hp.com/Eyeball#",
        "arg": "http://rdfs.org/sioc/argument#",
        "func": "http://www.w3.org/2007/rif-builtin-function#",
        "pav": "http://purl.org/pav/",
        "htir": "http://www.w3.org/2011/http#",
        "rdo": "http://purl.org/rdo/ns#",
        "mtecore": "http://purl.org/olia/mte/multext-east.owl#",
        "pns": "http://data.press.net/ontology/stuff/",
        "agg": "http://purl.org/twc/health/vocab/aggregate/",
        "shv": "http://ns.aksw.org/spatialHierarchy/",
        "tripfs2": "http://purl.org/tripfs/2010/06#",
        "sig": "http://purl.org/signature#",
        "frir": "http://purl.org/twc/ontology/frir.owl#",
        "ngeoi": "http://vocab.lenka.no/geo-deling#",
        "life": "http://life.deri.ie/schema/",
        "lctr": "http://data.linkedct.org/vocab/resource/",
        "quantities": "http://eulersharp.sourceforge.net/2003/03swap/quantitiesExtension#",
        "owltime": "http://www.w3.org/TR/owl-time#",
        "jita": "http://aims.fao.org/aos/jita/",
        "artstor": "http://simile.mit.edu/2003/10/ontologies/artstor#",
        "enhancer": "http://stanbol.apache.org/ontology/enhancer/enhancer#",
        "calli": "http://callimachusproject.org/rdf/2009/framework#",
        "no": "http://km.aifb.kit.edu/projects/numbers/number#",
        "scsv": "http://purl.org/NET/schema-org-csv#",
        "p20": "http://zbw.eu/beta/p20/vocab/",
        "bp": "http://open-services.net/ns/basicProfile#",
        "cheminf": "http://www.semanticweb.org/ontologies/cheminf.owl#",
        "gvp": "http://vocab.getty.edu/ontology#",
        "health": "http://purl.org/twc/health/vocab/",
        "dcr": "http://www.isocat.org/ns/dcr.rdf#",
        "ccard": "http://purl.org/commerce/creditcard#",
        "asn": "http://purl.org/ASN/schema/core/",
        "ipad": "http://www.padinthecity.com/",
        "fcm": "http://eulersharp.sourceforge.net/2006/02swap/fcm#",
        "qa": "http://www.mit.jyu.fi/ai/TRUST_Ontologies/QA.owl#",
        "wf": "http://www.w3.org/2005/01/wf/flow#",
        "kupkb": "http://www.e-lico.eu/data/kupkb/",
        "gxa": "http://www.ebi.ac.uk/gxa/",
        "coeus": "http://bioinformatics.ua.pt/coeus/",
        "ens": "http://models.okkam.org/ENS-core-vocabulary.owl#",
        "kw": "http://kwantu.net/kw/",
        "aims": "http://aims.fao.org/aos/common/",
        "saxon": "http://saxon.sf.net/",
        "sql": "http://ns.inria.fr/ast/sql#",
        "wfprov": "http://purl.org/wf4ever/wfprov#",
        "set": "http://www.w3.org/2000/10/swap/set#",
        "oper": "http://sweet.jpl.nasa.gov/2.0/mathOperation.owl#",
        "pay": "http://reference.data.gov.uk/def/payment#",
        "soap": "http://www.w3.org/2003/05/soap-envelope/",
        "aerols": "http://xmlns.com/aerols/0.1/",
        "agrelon": "http://d-nb.info/standards/elementset/agrelon#",
        "tgn": "http://vocab.getty.edu/tgn/",
        "d2r": "http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#",
        "marshall": "http://sites.google.com/site/xgmaitc/",
        "wfdesc": "http://purl.org/wf4ever/wfdesc#",
        "l4a": "http://labels4all.info/ns/",
        "myprefix": "http://myprefix.org/",
        "dt": "http://dbpedia.org/datatype/",
        "ncbitaxon": "http://purl.org/obo/owl/NCBITaxon#",
        "infosys": "http://www.infosys.com/",
        "aersv": "http://aers.data2semantics.org/vocab/",
        "pronom": "http://reference.data.gov.uk/technical-registry/",
        "rdfdf": "http://www.openlinksw.com/virtrdf-data-formats#",
        "atomrdf": "http://atomowl.org/ontologies/atomrdf#",
        "flow": "http://www.w3.org/2005/01/wf/flow#",
        "fc": "http://www.freeclass.eu/freeclass_v1#",
        "admssw": "http://purl.org/adms/sw/",
        "frbrcore": "http://purl.org/vocab/frbr/core#",
        "fls": "http://lukasblaho.sk/football_league_schema#",
        "fct": "http://openlinksw.com/services/facets/1.0/",
        "osn": "http://spatial.ucd.ie/lod/osn/",
        "pol": "http://escience.rpi.edu/ontology/semanteco/2/0/pollution.owl#",
        "vivo": "http://vivoweb.org/ontology/core#",
        "pat": "http://purl.org/hpi/patchr#",
        "blt": "http://www.bl.uk/schemas/bibliographic/blterms#",
        "fl": "http://eulersharp.sourceforge.net/2003/03swap/fl-rules#",
        "teach": "http://linkedscience.org/teach/ns#",
        "okg": "http://openknowledgegraph.org/ontology/",
        "hcard": "http://purl.org/uF/hCard/terms/",
        "dive": "http://scubadive.networld.to/dive.rdf#",
        "iso": "http://purl.org/iso25964/skos-thes#",
        "hgnc": "http://bio2rdf.org/hgnc:",
        "transit": "http://vocab.org/transit/terms/",
        "bing": "http://bing.com/schema/media/",
        "hxl": "http://hxl.humanitarianresponse.info/ns/#",
        "campsite": "http://www.openlinksw.com/campsites/schema#",
        "sgv": "http://www.w3.org/TR/SVG/",
        "dssn": "http://purl.org/net/dssn/",
        "dsp": "http://purl.org/metainfo/terms/dsp#",
        "carfo": "http://purl.org/carfo#",
        "rv": "http://wifo-ravensburg.de/semanticweb.rdf#",
        "osmsemnet": "http://spatial.ucd.ie/2012/08/osmsemnet/",
        "rdarole": "http://rdvocab.info/roles/",
        "xmls": "http://www.w3.org/2001/XMLSchema#",
        "ms": "http://purl.org/obo/owl/MS#",
        "iao": "http://purl.obolibrary.org/obo/iao.owl#",
        "tmpl": "http://purl.org/restdesc/http-template#",
        "opmw": "http://www.opmw.org/ontology/",
        "ends": "http://labs.mondeca.com/vocab/endpointStatus#",
        "npgx": "http://ns.nature.com/extensions/",
        "xch": "http://oanda2rdf.appspot.com/xch/",
        "fd": "http://foodable.co/ns/",
        "poder": "http://poderopedia.com/vocab/",
        "gndo": "http://d-nb.info/standards/elementset/gnd#",
        "dbyago": "http://dbpedia.org/class/yago/",
        "diseasome": "http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseasome/",
        "rad": "http://www.w3.org/ns/rad#",
        "pne": "http://data.press.net/ontology/event/",
        "xlink": "http://www.w3.org/1999/xlink/",
        "exterms": "http://www.example.org/terms/",
        "geom": "http://geovocab.org/geometry#",
        "place": "http://purl.org/ontology/places/",
        "spif": "http://spinrdf.org/spif#",
        "bcncon": "http://datos.bcn.cl/ontologies/bcn-congress#",
        "dis": "http://stanbol.apache.org/ontology/disambiguation/disambiguation#",
        "rec54": "http://www.w3.org/2001/02pd/rec54.rdf#",
        "cao": "http://purl.org/makolab/caont/",
        "wikipedia": "http://www.systemone.at/2006/03/wikipedia#",
        "greg": "http://kasei.us/about/foaf.xrdf#",
        "nytimes": "http://data.nytimes.com/elements/",
        "nxp": "http://purl.org/nxp/schema/v1/",
        "sdgp": "http://stats.data-gov.ie/property/",
        "frapo": "http://purl.org/cerif/frapo/",
        "germplasm": "http://purl.org/germplasm/terms#",
        "wscaim": "http://www.openk.org/wscaim.owl#",
        "rlno": "http://rdflivenews.aksw.org/ontology/",
        "eumida": "http://data.kasabi.com/dataset/eumida/terms/",
        "hifm": "http://purl.org/net/hifm/data#",
        "cro": "http://rhizomik.net/ontologies/copyrightonto.owl#",
        "skiresort": "http://www.openlinksw.com/ski_resorts/schema#",
        "iron": "http://purl.org/ontology/iron#",
        "mte": "http://nl.ijs.si/ME/owl/",
        "disease": "http://www.agfa.com/w3c/2009/humanDisorder#",
        "genea": "http://www.owl-ontologies.com/generations.owl#",
        "protegedc": "http://protege.stanford.edu/plugins/owl/dc/protege-dc.owl#",
        "str": "http://nlp2rdf.lod2.eu/schema/string/",
        "pkmn": "http://pokedex.dataincubator.org/pkm/",
        "wfm": "http://purl.org/net/wf-motifs#",
        "infection": "http://www.agfa.com/w3c/2009/infectiousDisorder#",
        "sdmxa": "http://purl.org/linked-data/sdmx/2009/attribute#",
        "open": "http://open.vocab.org/terms/",
        "reve": "http://data.eurecom.fr/ontology/reve#",
        "intervals": "http://reference.data.gov.uk/def/intervals/",
        "aigp": "http://swat.cse.lehigh.edu/resources/onto/aigp.owl#",
        "eseduc": "http://www.purl.org/ontologia/eseduc#",
        "lex": "http://purl.org/lex#",
        "rich": "http://rdf.data-vocabulary.org/",
        "prism21": "http://prismstandard.org/namespaces/basic/2.1/",
        "c4dm": "http://purl.org/NET/c4dm/event.owl#",
        "vaem": "http://www.linkedmodel.org/schema/vaem#",
        "fingal": "http://vocab.deri.ie/fingal#",
        "biordf": "http://purl.org/net/biordfmicroarray/ns#",
        "osukdt": "http://www.ordnancesurvey.co.uk/ontology/Datatypes.owl#",
        "tr": "http://www.thomsonreuters.com/",
        "wm": "http://ns.inria.fr/webmarks#",
        "ub": "http://www.lehigh.edu/~zhp2/2004/0401/univ-bench.owl#",
        "recipe": "http://linkedrecipes.org/schema/",
        "frad": "http://iflastandards.info/ns/fr/frad/",
        "ogorg": "http://opengraph.org/schema/",
        "re": "http://www.w3.org/2000/10/swap/reason#",
        "gbv": "http://purl.org/ontology/gbv/",
        "grs": "http://www.georss.org/georss/",
        "un": "http://www.w3.org/2007/ont/unit#",
        "omv": "http://omv.ontoware.org/2005/05/ontology#",
        "city": "http://datos.localidata.com/def/City#",
        "pna": "http://data.press.net/ontology/asset/",
        "wsc": "http://www.openk.org/wscaim.owl#",
        "photoshop": "http://ns.adobe.com/photoshop/1.0/",
        "occult": "http://data.totl.net/occult/",
        "lr": "http://linkedrecipes.org/schema/",
        "s2s": "http://escience.rpi.edu/ontology/sesf/s2s/4/0/",
        "xsi": "http://www.w3.org/2001/XMLSchema-instance#",
        "identity": "http://purl.org/twc/ontologies/identity.owl#",
        "sci": "http://data.scientology.org/ns/",
        "orca": "http://geni-orca.renci.org/owl/topology.owl#",
        "goef": "http://purl.org/twc/vocab/goef#",
        "np": "http://www.nanopub.org/nschema#",
        "lgv": "http://linkedgeodata.org/ontology/",
        "ulan": "http://vocab.getty.edu/ulan/",
        "vocab": "http://rdf.ontology2.com/vocab#",
        "lodac": "http://lod.ac/ns/lodac#",
        "moby": "http://www.mygrid.org.uk/mygrid-moby-service#",
        "chebi": "http://bio2rdf.org/chebi:",
        "hg": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "dpl": "http://dbpedialite.org/things/",
        "mime": "http://purl.org/NET/mediatypes/",
        "daiaserv": "http://purl.org/ontology/daia/Service/",
        "wapp": "http://ns.rww.io/wapp#",
        "omapi": "http://purl.org/omapi/0.2/#",
        "b2rpubchem": "http://bio2rdf.org/ns/ns/ns/pubchem#",
        "r4ta": "http://ns.inria.fr/ratio4ta/v1#",
        "sem": "http://www.ontologydesignpatterns.org/cp/owl/semiotics.owl#",
        "qrl": "http://www.aifb.kit.edu/project/ld-retriever/qrl#",
        "geof": "http://www.opengis.net/def/function/geosparql/",
        "cis": "http://purl.org/NET/cloudisus#",
        "cts2": "http://schema.omg.org/spec/CTS2/1.0/",
        "wikterms": "http://wiktionary.dbpedia.org/terms/",
        "xt": "http://purl.org/twc/vocab/cross-topix#",
        "telix": "http://purl.org/telix#",
        "rdamedia": "http://rdvocab.info/termList/RDAMediaType/",
        "aos": "http://rdf.muninn-project.org/ontologies/appearances#",
        "npgd": "http://ns.nature.com/datasets/",
        "wfs": "http://schemas.opengis.net/wfs/",
        "osp": "http://data.lirmm.fr/ontologies/osp#",
        "overheid": "http://standaarden.overheid.nl/owms/",
        "locn": "http://www.w3.org/ns/locn#",
        "voidp": "http://www.enakting.org/provenance/voidp/",
        "wn20": "http://www.w3.org/2006/03/wn/wn20/",
        "swpatho": "http://swpatho.ag-nbi.de/context/meta.owl#",
        "gesis": "http://lod.gesis.org/lodpilot/ALLBUS/vocab.rdf#",
        "bcnbio": "http://datos.bcn.cl/ontologies/bcn-biographies#",
        "laposte": "http://data.lirmm.fr/ontologies/laposte#",
        "algo": "http://securitytoolbox.appspot.com/securityAlgorithms#",
        "dctypes": "http://purl.org/dc/dcmitype/",
        "sso": "http://nlp2rdf.lod2.eu/schema/sso/",
        "rssynd": "http://web.resource.org/rss/1.0/modules/syndication/",
        "curr": "https://w3id.org/cc#",
        "qb4o": "http://purl.org/olap#",
        "ple": "http://pleiades.stoa.org/places/",
        "lexvo": "http://lexvo.org/ontology#",
        "crtv": "http://open-services.net/ns/crtv#",
        "puelia": "http://kwijibo.talis.com/vocabs/puelia#",
        "aers": "http://aers.data2semantics.org/resource/",
        "vcardx": "http://buzzword.org.uk/rdf/vcardx#",
        "sdo": "http://schema.org/",
        "oecd": "http://oecd.270a.info/dataset/",
        "gfo": "http://www.onto-med.de/ontologies/gfo.owl#",
        "wl": "http://www.wsmo.org/ns/wsmo-lite#",
        "premis": "http://multimedialab.elis.ugent.be/users/samcoppe/ontologies/Premis/premis.owl#",
        "situ": "http://www.ontologydesignpatterns.org/cp/owl/situation.owl#",
        "sdmxdim": "http://purl.org/linked-data/sdmx/2009/dimension#",
        "telmap": "http://purl.org/telmap/",
        "dcm": "http://dcm.com/",
        "cdtype": "http://purl.org/cld/cdtype/",
        "cvbase": "http://purl.org/captsolo/resume-rdf/0.2/base#",
        "penn": "http://purl.org/olia/penn.owl#",
        "eui": "http://institutions.publicdata.eu/#",
        "jjd": "http://www.joshuajeeson.com/",
        "inno": "http://purl.org/innovation/ns#",
        "zoomaterms": "http://rdf.ebi.ac.uk/vocabulary/zooma/",
        "vsto": "http://escience.rpi.edu/ontology/vsto/2/0/vsto.owl#",
        "prf": "http://www.openmobilealliance.org/tech/profiles/UAPROF/ccppschema-20021212#",
        "italy": "http://data.kasabi.com/dataset/italy/schema/",
        "geofla": "http://data.ign.fr/ontologies/geofla#",
        "steel": "http://ontorule-project.eu/resources/steel-30#",
        "wkd": "http://schema.wolterskluwer.de/",
        "cf": "http://mmisw.org/ont/cf/parameter/",
        "ecpo": "http://purl.org/ontology/ecpo#",
        "w3con": "http://www.w3.org/2000/10/swap/pim/contact#",
        "oj": "http://ontojob.at/",
        "wiki": "http://en.wikipedia.org/wiki/",
        "npgg": "http://ns.nature.com/graphs/",
        "l4lod": "http://ns.inria.fr/l4lod/v2/",
        "vsw": "http://verticalsearchworks.com/ontology/",
        "rpubl": "http://rinfo.lagrummet.se/ns/2008/11/rinfo/publ#",
        "prolog": "http://eulersharp.sourceforge.net/2003/03swap/prolog#",
        "httpm": "http://www.w3.org/2011/http-methods#",
        "eunis": "http://eunis.eea.europa.eu/rdf/species-schema.rdf#",
        "lldr": "http://purl.oclc.org/NET/lldr/ns#",
        "mohammad": "http://manesht.ir/",
        "visko": "http://trust.utep.edu/visko/ontology/visko-operator-v3.owl#",
        "fos": "http://futurios.org/fos/spec/",
        "oarj": "http://opendepot.org/reference/linked/1.0/",
        "onssprel": "http://www.ordnancesurvey.co.uk/ontology/SpatialRelations/v0.2/SpatialRelations.owl#",
        "role": "http://purl.org/vocab/participation/schema#",
        "scufl2": "http://ns.taverna.org.uk/2010/scufl2#",
        "dvia": "http://data.eurecom.fr/ontology/dvia#",
        "dawgt": "http://www.w3.org/2001/sw/DataAccess/tests/test-dawg#",
        "ludo": "http://vocab.ox.ac.uk/ludo#",
        "wp": "http://vocabularies.wikipathways.org/",
        "tisc": "http://observedchange.com/tisc/ns#",
        "mil": "http://rdf.muninn-project.org/ontologies/military#",
        "iot": "http://www.linkedthings.com/iot/",
        "bm": "http://bio2rdf.org/",
        "nuts": "http://nuts.psi.enakting.org/id/BE335/doc/",
        "locwd": "http://purl.org/locwd/schema#",
        "ecb": "http://ecb.270a.info/class/1.0/",
        "crv": "http://purl.org/twc/vocab/datacarver#",
        "bbc": "http://www.bbc.co.uk/ontologies/news/",
        "nsl": "http://purl.org/ontology/storyline/",
        "r2rml": "http://www.w3.org/ns/r2rml#",
        "tvc": "http://www.essepuntato.it/2012/04/tvc/",
        "psh": "http://psh.techlib.cz/skos/",
        "ql": "http://www.w3.org/2004/ql#",
        "bcngeo": "http://datos.bcn.cl/ontologies/bcn-geographics#",
        "lh": "http://vocab.inf.ed.ac.uk/library/holdings#",
        "prviv": "http://purl.org/net/provenance/integrity#",
        "webbox": "http://webbox.ecs.soton.ac.uk/ns#",
        "ds": "http://purl.org/ctic/dcat#",
        "refe": "http://orion.tw.rpi.edu/~xgmatwc/refe/",
        "geovocab": "http://geovocab.org/",
        "water": "http://escience.rpi.edu/ontology/semanteco/2/0/water.owl#",
        "vcard2006": "http://www.w3.org/2006/vcard/ns#",
        "osr": "http://dati.senato.it/osr/",
        "rdf123": "http://rdf123.umbc.edu/ns/",
        "namespaces": "https://vg.no/",
        "rdaw": "http://rdaregistry.info/Elements/w/",
        "mrel": "http://id.loc.gov/vocabulary/relators/",
        "rdacontent": "http://rdvocab.info/termList/RDAContentType/",
        "vsws": "http://verticalsearchworks.com/ontology/synset#",
        "centrifuge": "http://purl.org/twc/vocab/centrifuge#",
        "gawd": "http://gawd.atlantides.org/terms/",
        "prvt": "http://purl.org/net/provenance/types#",
        "harrisons": "http://harrisons.cc/",
        "tblcard": "http://www.w3.org/People/Berners-Lee/card#",
        "cex": "http://purl.org/weso/computex/ontology#",
        "strdf": "http://strdf.di.uoa.gr/ontology#",
        "up": "http://users.ugent.be/~tdenies/up/",
        "ebu": "http://semantic.eurobau.com/eurobau-utility.owl#",
        "stac": "http://securitytoolbox.appspot.com/stac#",
        "mads": "http://www.loc.gov/mads/rdf/v1#",
        "rdacarrier": "http://rdvocab.info/termList/RDACarrierType/",
        "wbc": "http://worldbank.270a.info/classification/",
        "roterms": "http://purl.org/wf4ever/roterms#",
        "dbtont": "http://dbtropes.org/ont/",
        "qud": "http://qudt.org/1.1/schema/qudt#",
        "kbp": "http://tackbp.org/2013/ontology#",
        "owlse": "http://www.daml.org/services/owl-s/1.2/generic/Expression.owl#",
        "qvoc": "http://mlode.nlp2rdf.org/quranvocab#",
        "alchemy": "http://rdf.alchemyapi.com/rdf/v1/s/aapi-schema#",
        "won": "http://purl.org/webofneeds/model#",
        "poste": "http://data.lirmm.fr/ontologies/poste#",
        "cb": "http://cbasewrap.ontologycentral.com/vocab#",
        "viskov": "http://trust.utep.edu/visko/ontology/visko-view-v3.owl#",
        "geocontext": "http://www.geocontext.org/publ/2013/vocab#",
        "odcs": "http://opendata.cz/infrastructure/odcleanstore/",
        "fea": "http://vocab.data.gov/def/fea#",
        "w3po": "http://purl.org/provenance/w3p/w3po#",
        "roevo": "http://purl.org/wf4ever/roevo#",
        "finlaw": "http://purl.org/finlex/schema/laki/",
        "pext": "http://www.ontotext.com/proton/protonext#",
        "pkgsrc": "http://pkgsrc.co/schema#",
        "pam": "http://prismstandard.org/namespaces/pam/2.0/",
        "ec": "http://eulergui.sourceforge.net/contacts.owl.n3#",
        "deo": "http://purl.org/spar/deo/",
        "pingback": "http://purl.org/net/pingback/",
        "emotion": "http://ns.inria.fr/emoca#",
        "frbrer": "http://iflastandards.info/ns/fr/frbr/frbrer/",
        "uta": "http://uptheasset.org/ontology#",
        "vvo": "http://purl.org/vvo/ns#",
        "pizza": "http://www.co-ode.org/ontologies/pizza/pizza.owl#",
        "dcndl": "http://ndl.go.jp/dcndl/terms/",
        "conf": "http://richard.cyganiak.de/2007/pubby/config.rdf#",
        "ssso": "http://purl.org/ontology/ssso#",
        "comm": "http://vocab.resc.info/communication#",
        "dl": "http://ontology.ip.rm.cnr.it/ontologies/DOLCE-Lite#",
        "swperson": "http://data.semanticweb.org/person/",
        "wi": "http://purl.org/ontology/wi/core#",
        "vapour": "http://vapour.sourceforge.net/vocab.rdf#",
        "frsad": "http://iflastandards.info/ns/fr/frsad/",
        "fcp": "http://www.newmedialab.at/fcp/",
        "rlnr": "http://rdflivenews.aksw.org/resource/",
        "part": "http://purl.org/vocab/participation/schema#",
        "particip": "http://purl.org/vocab/participation/schema#",
        "vdpp": "http://data.lirmm.fr/ontologies/vdpp#",
        "xmp": "http://ns.adobe.com/xap/1.0/",
        "wikidata": "http://www.wikidata.org/entity/",
        "bibframe": "http://bibframe.org/vocab/",
        "viskoo": "http://trust.utep.edu/visko/ontology/visko-operator-v3.owl#",
        "graffle": "http://purl.org/twc/vocab/vsr/graffle#",
        "rdafrbr": "http://rdvocab.info/uri/schema/FRBRentitiesRDA/",
        "sdmxd": "http://purl.org/linked-data/sdmx/2009/dimension#",
        "stats": "http://purl.org/rdfstats/stats#",
        "te": "http://www.w3.org/2006/time-entry#",
        "wsl": "http://www.wsmo.org/ns/wsmo-lite#",
        "wlo": "http://purl.org/ontology/wo/",
        "infor": "http://www.ontologydesignpatterns.org/cp/owl/informationrealization.owl#",
        "nyt": "http://data.nytimes.com/",
        "vrank": "http://purl.org/voc/vrank#",
        "csp": "http://vocab.deri.ie/csp#",
        "stream": "http://dbpedia.org/ontology/Stream/",
        "csm": "http://purl.org/csm/1.0#",
        "ctorg": "http://purl.org/ctic/infraestructuras/organizacion#",
        "s3db": "http://www.s3db.org/core#",
        "opl": "http://openlinksw.com/schema/attribution#",
        "cosmo": "http://purl.org/ontology/cosmo#",
        "twaapi": "http://purl.org/twc/vocab/aapi-schema#",
        "camelot": "http://vocab.ox.ac.uk/camelot#",
        "daisy": "http://www.daisy.org/z3998/2012/vocab/",
        "rdam": "http://rdaregistry.info/Elements/m/",
        "amalgame": "http://purl.org/vocabularies/amalgame#",
        "rdau": "http://rdaregistry.info/Elements/u/",
        "fincaselaw": "http://purl.org/finlex/schema/oikeus/",
        "pubmed": "http://bio2rdf.org/pubmed_vocabulary:",
        "cold": "http://purl.org/configurationontology#",
        "olad": "http://openlad.org/vocab#",
        "osspr": "http://data.ordnancesurvey.co.uk/ontology/spatialrelations/",
        "itsmo": "http://ontology.it/itsmo/v1#",
        "dbt": "http://dbpedia.org/resource/Template:",
        "doco": "http://purl.org/spar/doco/",
        "worldbank": "http://worldbank.270a.info/dataset/",
        "emoca": "http://ns.inria.fr/emoca#",
        "api": "http://purl.org/linked-data/api/vocab#",
        "wbp": "http://worldbank.270a.info/property/",
        "who": "http://www.who.int/vocab/ontology#",
        "nidm": "http://nidm.nidash.org/",
        "wf4ever": "http://purl.org/wf4ever/wf4ever#",
        "odv": "http://reference.data.gov.uk/def/organogram/",
        "saif": "http://wwwiti.cs.uni-magdeburg.de/~srahman/",
        "biotop": "http://purl.org/biotop/biotop.owl#",
        "dcite": "http://purl.org/spar/datacite/",
        "lcy": "http://purl.org/vocab/lifecycle/schema#",
        "ogbd": "http://www.ogbd.fr/2012/ontologie#",
        "om": "http://opendata.caceres.es/def/ontomunicipio#",
        "meb": "http://rdf.myexperiment.org/ontologies/base/",
        "purl": "http://purl.org/dc/terms/",
        "coun": "http://www.daml.org/2001/09/countries/iso-3166-ont#",
        "accom": "http://purl.org/acco/ns#",
        "ptop": "http://www.ontotext.com/proton/protontop#",
        "cpa": "http://www.ontologydesignpatterns.org/schemas/cpannotationschema.owl#",
        "lib": "http://purl.org/library/",
        "ntag": "http://ns.inria.fr/nicetag/2010/09/09/voc#",
        "swpo": "http://sw-portal.deri.org/ontologies/swportal#",
        "rdarel": "http://rdvocab.info/RDARelationshipsWEMI/",
        "dqm": "http://purl.org/dqm-vocabulary/v1/dqm#",
        "radion": "http://www.w3.org/ns/radion#",
        "iol": "http://www.ontologydesignpatterns.org/ont/dul/IOLite.owl#",
        "pso": "http://purl.org/spar/pso/",
        "ox": "http://vocab.ox.ac.uk/projectfunding#",
        "msr": "http://www.telegraphis.net/ontology/measurement/measurement#",
        "mp": "http://jicamaro.info/mp#",
        "rdac": "http://rdaregistry.info/Elements/c/",
        "dbptmpl": "http://dbpedia.org/resource/Template:",
        "odapp": "http://vocab.deri.ie/odapp#",
        "bsb": "http://lod.b3kat.de/title/",
        "gastro": "http://www.ebsemantics.net/gastro#",
        "limoo": "http://purl.org/LiMo/0.1/",
        "ling": "http://purl.org/voc/ling/",
        "agls": "http://www.agls.gov.au/agls/terms/",
        "osgeom": "http://data.ordnancesurvey.co.uk/ontology/geometry/",
        "dn": "http://purl.org/datanode/ns/",
        "archdesc": "http://archdesc.info/archEvent#",
        "gq": "http://genomequest.com/",
        "bwb": "http://doc.metalex.eu/bwb/ontology/",
        "as": "http://www.w3.org/ns/activitystreams#",
        "biro": "http://purl.org/spar/biro/",
        "rdag3": "http://rdvocab.info/ElementsGr3/",
        "rdag1": "http://rdvocab.info/Elements/",
        "ep": "http://eprints.org/ontology/",
        "xml": "http://www.w3.org/XML/1998/namespace/",
        "drm": "http://vocab.data.gov/def/drm#",
        "mvco": "http://purl.oclc.org/NET/mvco.owl#",
        "oecc": "http://www.oegov.org/core/owl/cc#",
        "geosp": "http://rdf.geospecies.org/ont/geospecies#",
        "semio": "http://www.lingvoj.org/semio#",
        "icane": "http://www.icane.es/opendata/vocab#",
        "hlygt": "http://www.holygoat.co.uk/owl/redwood/0.1/tags/",
        "moac": "http://observedchange.com/moac/ns#",
        "paia": "http://purl.org/ontology/paia#",
        "mged": "http://mged.sourceforge.net/ontologies/MGEDOntology.owl#",
        "elec": "http://purl.org/ctic/sector-publico/elecciones#",
        "obsm": "http://rdf.geospecies.org/methods/observationMethod#",
        "scms": "http://ns.aksw.org/scms/annotations/",
        "dbpr": "http://dbpedia.org/resource/",
        "gnvc": "http://purl.org/gc/",
        "lingvo": "http://www.lingvoj.org/ontology#",
        "delta": "http://www.w3.org/2004/delta#",
        "quty": "http://www.telegraphis.net/ontology/measurement/quantity#",
        "penis": "http://penis.to/#",
        "cbase": "http://ontologycentral.com/2010/05/cb/vocab#",
        "geod": "http://vocab.lenka.no/geo-deling#",
        "rdaa": "http://rdaregistry.info/Elements/a/",
        "emp": "http://purl.org/ctic/empleo/oferta#",
        "rso": "http://www.researchspace.org/ontology/",
        "lexcz": "http://purl.org/lex/cz#",
        "rdae": "http://rdaregistry.info/Elements/e/",
        "viso": "http://purl.org/viso/",
        "oliasystem": "http://purl.org/olia/system.owl#",
        "ostop": "http://www.ordnancesurvey.co.uk/ontology/Topography/v0.1/Topography.owl#",
        "mocanal": "http://www.semanticweb.org/asow/ontologies/2013/9/untitled-ontology-36#",
        "tsioc": "http://rdfs.org/sioc/types#",
        "rdfdata": "http://rdf.data-vocabulary.org/rdf.xml#",
        "crsw": "http://courseware.rkbexplorer.com/ontologies/courseware#",
        "ecos": "http://kmm.lboro.ac.uk/ecos/1.0#",
        "lmm1": "http://www.ontologydesignpatterns.org/ont/lmm/LMM_L1.owl#",
        "osadm": "http://data.ordnancesurvey.co.uk/ontology/admingeo/",
        "pois": "http://purl.oclc.org/POIS/vcblr#",
        "onyx": "http://www.gsi.dit.upm.es/ontologies/onyx/ns#",
        "dcoid": "http://dx.deepcarbon.net/",
        "opmo": "http://openprovenance.org/model/opmo#",
        "spt": "http://spitfire-project.eu/ontology/ns/",
        "turismo": "http://idi.fundacionctic.org/cruzar/turismo#",
        "ontopic": "http://www.ontologydesignpatterns.org/ont/dul/ontopic.owl#",
        "pwo": "http://purl.org/spar/pwo/",
        "lsc": "http://linkedscience.org/lsc/ns#",
        "muldicat": "http://iflastandards.info/ns/muldicat#",
        "graves": "http://rdf.muninn-project.org/ontologies/graves#",
        "seq": "http://www.ontologydesignpatterns.org/cp/owl/sequence.owl#",
        "article": "http://ogp.me/ns/article#",
        "lmm2": "http://www.ontologydesignpatterns.org/ont/lmm/LMM_L2.owl#",
        "ecrm": "http://erlangen-crm.org/current/",
        "gnm": "http://www.geonames.org/ontology/mappings/",
        "passim": "http://data.lirmm.fr/ontologies/passim#",
        "dr": "http://purl.org/swan/2.0/discourse-relationships/",
        "mds": "http://doc.metalex.eu/id/",
        "mm": "http://linkedmultimedia.org/sparql-mm/ns/1.0.0/function#",
        "ordf": "http://purl.org/NET/ordf/",
        "gadm": "http://gadm.geovocab.org/ontology#",
        "kai": "http://kai.uni-kiel.de/",
        "tw": "http://tw.rpi.edu/schema/",
        "edgar": "http://edgarwrap.ontologycentral.com/vocab/edgar#",
        "raul": "http://vocab.deri.ie/raul#",
        "rdb": "http://www.dbs.cs.uni-duesseldorf.de/RDF/relational#",
        "laabs": "http://dbpedia.org/resource/",
        "oprovo": "http://openprovenance.org/ontology#",
        "tis": "http://www.ontologydesignpatterns.org/cp/owl/timeindexedsituation.owl#",
        "snarm": "http://rdf.myexperiment.org/ontologies/snarm/",
        "tao": "http://vocab.deri.ie/tao#",
        "op": "http://environment.data.gov.au/def/op#",
        "gcis": "http://data.globalchange.gov/gcis.owl#",
        "bihap": "http://bihap.kb.gov.tr/ontology/",
        "coll": "http://purl.org/co/",
        "tddo": "http://databugger.aksw.org/ns/core#",
        "odpart": "http://www.ontologydesignpatterns.org/cp/owl/participation.owl#",
        "rdai": "http://rdaregistry.info/Elements/i/",
        "being": "http://purl.org/ontomedia/ext/common/being#",
        "trait": "http://contextus.net/ontology/ontomedia/ext/common/trait#",
        "cmd": "http://clarin.eu/cmd#",
        "eurlex": "http://eur-lex.publicdata.eu/ontology/",
        "evident": "http://purl.org/net/evident#",
        "erce": "http://xxefe.de/",
        "asgv": "http://aims.fao.org/aos/agrovoc/",
        "opencyc": "http://sw.opencyc.org/concept/",
        "app": "http://jmvanel.free.fr/ontology/software_applications.n3#",
        "dbrc": "http://dbpedia.org/resource/Category:",
        "pproc": "http://contsem.unizar.es/def/sector-publico/pproc#",
        "geop": "http://aims.fao.org/aos/geopolitical.owl#",
        "location": "http://sw.deri.org/2006/07/location/loc#",
        "provone": "http://purl.org/provone#",
        "mammal": "http://lod.taxonconcept.org/ontology/p01/Mammalia/index.owl#",
        "siocserv": "http://rdfs.org/sioc/services#",
        "od": "http://purl.org/twc/vocab/opendap#",
        "li": "http://def.seegrid.csiro.au/isotc211/iso19115/2003/lineage#",
        "mt": "http://www.w3.org/2001/sw/DataAccess/tests/test-manifest#",
        "odrl": "http://www.w3.org/ns/odrl/2/",
        "bk": "http://www.provbook.org/ns/#",
        "ftcontent": "http://www.ft.com/ontology/content/",
        "skos08": "http://www.w3.org/2008/05/skos#",
        "lexinfo": "http://www.lexinfo.net/ontology/2.0/lexinfo#",
        "cjr": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/callejero#",
        "rdl": "http://data.posccaesar.org/rdl/",
        "ru": "http://purl.org/imbi/ru-meta.owl#",
        "dpd": "http://www.kanzaki.com/ns/dpd#",
        "contsem": "http://contsem.unizar.es/def/sector-publico/contratacion#",
        "bco": "http://purl.obolibrary.org/obo/bco.owl#",
        "oplprod": "http://www.openlinksw.com/ontology/products#",
        "dbpedia2": "http://dbpedia.org/property/",
        "olac11": "http://www.language-archives.org/OLAC/1.1/",
        "agrd": "http://agrinepaldata.com/",
        "lfov": "https://w3id.org/legal_form#",
        "fao": "http://fao.270a.info/dataset/",
        "vgo": "http://purl.org/net/VideoGameOntology#",
        "defns": "http://www.openarchives.org/OAI/2.0/",
        "mb": "http://dbtune.org/musicbrainz/resource/instrument/",
        "soc": "http://purl.org/net/hdlipcores/ontology/soc#",
        "language": "http://id.loc.gov/vocabulary/iso639-1/",
        "my": "http://www.mobile.com/model/",
        "vin": "http://www.w3.org/TR/2003/PR-owl-guide-20031209/wine#",
        "lime": "http://art.uniroma2.it/ontologies/lime#",
        "omdoc": "http://omdoc.org/ontology/",
        "fbgeo": "http://rdf.freebase.com/ns/location/geocode/",
        "ses": "http://lod.taxonconcept.org/ses/",
        "olac": "http://www.language-archives.org/OLAC/1.0/",
        "videogame": "http://purl.org/net/vgo#",
        "csv": "http://vocab.sindice.net/csv/",
        "pvcs": "http://purl.org/twc/vocab/pvcs#",
        "cmdi": "http://www.clarin.eu/cmd/",
        "omnlife": "http://open-multinet.info/ontology/omn-lifecycle#",
        "mmt": "http://linkedmultimedia.org/sparql-mm/functions/temporal#",
        "wno": "http://wordnet-rdf.princeton.edu/ontology#",
        "of": "http://owlrep.eu01.aws.af.cm/fridge#",
        "irsteaont": "http://ontology.irstea.fr/weather/ontology#",
        "wfn": "http://webofcode.org/wfn/",
        "msm": "http://iserve.kmi.open.ac.uk/ns/msm#",
        "pco": "http://purl.org/procurement/public-contracts#",
        "call": "http://webofcode.org/wfn/call:",
        "gaf": "http://groundedannotationframework.org/",
        "travel": "http://www.co-ode.org/roberts/travel.owl#",
        "vext": "http://ldf.fi/void-ext#",
        "ruto": "http://rdfunit.aksw.org/ns/core#",
        "sad": "http://vocab.deri.ie/sad#",
        "frb": "http://frb.270a.info/dataset/",
        "onisep": "http://rdf.onisep.fr/resource/",
        "origins": "http://origins.link/",
        "fcs": "http://clarin.eu/fcs/resource#",
        "pic": "http://www.ipaw.info/ns/picaso#",
        "openskos": "http://openskos.org/xmlns#",
        "vra": "http://simile.mit.edu/2003/10/ontologies/vraCore3#",
        "metadata": "http://purl.oreilly.com/ns/meta/",
        "lda": "http://purl.org/linked-data/api/vocab#",
        "oh": "http://semweb.mmlab.be/ns/oh#",
        "l2sp": "http://www.linked2safety-project.eu/properties/",
        "nxs": "http://www.neclimateus.org/",
        "fp3": "http://vocab.fusepool.info/fp3#",
        "sru": "http://www.loc.gov/zing/srw/",
        "estrn": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/transporte#",
        "wikim": "http://spi-fm.uca.es/spdef/models/genericTools/wikim/1.0#",
        "opllic": "http://www.openlinksw.com/ontology/licenses#",
        "uis": "http://uis.270a.info/dataset/",
        "odapps": "http://semweb.mmlab.be/ns/odapps#",
        "friends": "http://www.openarchives.org/OAI/2.0/friends/",
        "oplres": "http://www.openlinksw.com/ontology/restrictions#",
        "thors": "http://resource.geosciml.org/ontology/timescale/thors#",
        "parl": "http://reference.data.gov.uk/def/parliament/",
        "spdx": "http://spdx.org/rdf/terms#",
        "lexicon": "http://www.example.org/lexicon#",
        "stanford": "http://purl.org/olia/stanford.owl#",
        "koly": "http://www.ensias.ma/",
        "esadm": "http://vocab.linkeddata.es/datosabiertos/def/sector-publico/territorio#",
        "babelnet": "http://babelnet.org/2.0/",
        "cmdm": "http://infra.clarin.eu/cmd/",
        "sam": "http://def.seegrid.csiro.au/isotc211/iso19156/2011/sampling#",
        "estatwrap": "http://ontologycentral.com/2009/01/eurostat/ns#",
        "bag": "http://lod.geodan.nl/vocab/bag#",
        "irstea": "http://ontology.irstea.fr/",
        "pkm": "http://www.ontotext.com/proton/protonkm#",
        "dogont": "http://elite.polito.it/ontologies/dogont.owl#",
        "shex": "http://www.w3.org/2013/ShEx/ns#",
        "bis": "http://bis.270a.info/dataset/",
        "imf": "http://imf.270a.info/dataset/",
        "llm": "http://lodlaundromat.org/metrics/ontology/",
        "lofv": "http://purl.org/legal_form/vocab#",
        "trig": "http://www.w3.org/2004/03/trix/rdfg-1/",
        "rvl": "http://purl.org/rvl/",
        "tavprov": "http://ns.taverna.org.uk/2012/tavernaprov/",
        "va": "http://code-research.eu/ontology/visual-analytics#",
        "taxon": "http://purl.org/biodiversity/taxon/",
        "sro": "http://salt.semanticauthoring.org/ontologies/sro#",
        "jp1": "http://rdf.muninn-project.org/ontologies/jp1/",
        "fma": "http://sig.uw.edu/fma#",
        "static": "http://vocab-ld.org/vocab/static-ld#",
        "diag": "http://www.loc.gov/zing/srw/diagnostic/",
        "employee": "http://www.employee.com/data#",
        "smg": "http://ns.cerise-project.nl/energy/def/cim-smartgrid#",
        "gtfs": "http://vocab.gtfs.org/terms#",
        "agro": "http://agrinepaldata.com/vocab/",
        "oplacl": "http://www.openlinksw.com/ontology/acl#",
        "fam": "http://vocab.fusepool.info/fam#",
        "holding": "http://purl.org/ontology/holding#",
        "uri4uri": "http://uri4uri.net/vocab#",
        "topo": "http://data.ign.fr/def/topo#",
        "cdc": "http://www.contextdatacloud.org/resource/",
        "xslopm": "http://purl.org/net/opmv/types/xslt#",
        "llo": "http://lodlaundromat.org/ontology/",
        "ecc": "https://ns.eccenca.com/",
        "ebucore": "http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#",
        "tm": "http://def.seegrid.csiro.au/isotc211/iso19108/2002/temporal#",
        "tac": "http://ns.bergnet.org/tac/0.1/triple-access-control#",
        "lmf": "http://www.lexinfo.net/lmf#",
        "dbug": "http://ontologi.es/doap-bugs#",
        "citof": "http://www.essepuntato.it/2013/03/cito-functions#",
        "kml": "http://www.opengis.net/kml/2.2#",
        "abs": "http://abs.270a.info/dataset/",
        "navm": "https://w3id.org/navigation_menu#",
        "geos": "http://www.telegraphis.net/ontology/geography/geography#",
        "hr": "http://iserve.kmi.open.ac.uk/ns/hrests#",
        "pattern": "http://www.essepuntato.it/2008/12/pattern#",
        "whisky": "http://vocab.org/whisky/terms/",
        "lc": "http://semweb.mmlab.be/ns/linkedconnections#",
        "zr": "http://explain.z3950.org/dtd/2.0/",
        "oils": "http://lemon-model.net/oils#",
        "mico": "http://www.mico-project.eu/ns/platform/1.0/schema#",
        "ll": "http://lodlaundromat.org/resource/",
        "cl": "http://advene.org/ns/cinelab/",
        "physo": "http://merlin.phys.uni.lodz.pl/onto/physo/physo.owl#",
        "dbcat": "http://dbpedia.org/resource/Category:",
        "voidext": "http://rdfs.org/ns/void-ext#",
        "wn30": "http://purl.org/vocabularies/princeton/wn30/",
        "bbcprov": "http://www.bbc.co.uk/ontologies/provenance/",
        "unspsc": "http://ontoview.org/schema/unspsc/1#",
        "galaksiya": "http://ontoloji.galaksiya.com/vocab/",
        "ext": "http://def.seegrid.csiro.au/isotc211/iso19115/2003/extent#",
        "plo": "http://purl.org/net/po#",
        "pnc": "http://data.press.net/ontology/classification/",
        "dq": "http://def.seegrid.csiro.au/isotc211/iso19115/2003/dataquality#",
        "odo": "http://ocean-data.org/schema/",
        "form": "http://deductions-software.com/ontologies/forms.owl.ttl#",
        "oan": "http://data.lirmm.fr/ontologies/oan/",
        "guo": "http://purl.org/hpi/guo#",
        "scip": "http://lod.taxonconcept.org/ontology/sci_people.owl#",
        "qu": "http://purl.oclc.org/NET/ssnx/qu/qu#",
        "vmm": "http://spi-fm.uca.es/spdef/models/genericTools/vmm/1.0#",
        "dicom": "http://purl.org/healthcarevocab/v1#",
        "ic": "http://imi.ipa.go.jp/ns/core/210#",
        "esaloj": "http://vocab.linkeddata.es/datosabiertos/def/turismo/alojamiento#",
        "sbench": "http://swat.cse.lehigh.edu/onto/univ-bench.owl#",
        "roadmap": "http://mappings.roadmap.org/",
        "hdo": "http://www.samos.gr/ontologies/helpdeskOnto.owl#",
        "spfood": "http://kmi.open.ac.uk/projects/smartproducts/ontologies/food.owl#",
        "rdarel2": "http://metadataregistry.org/uri/schema/RDARelationshipsGR2/",
        "wikimedia": "http://upload.wikimedia.org/wikipedia/commons/f/f6/",
        "wn31": "http://wordnet-rdf.princeton.edu/wn31/",
        "gf": "http://def.seegrid.csiro.au/isotc211/iso19109/2005/feature#",
        "naval": "http://rdf.muninn-project.org/ontologies/naval#",
        "wro": "http://purl.org/net/wf4ever/ro#",
        "basic": "http://def.seegrid.csiro.au/isotc211/iso19103/2005/basic#",
        "bevon": "http://rdfs.co/bevon/",
        "escjr": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/callejero#",
        "psys": "http://www.ontotext.com/proton/protonsys#",
        "st": "http://semweb.mmlab.be/ns/stoptimes#",
        "voidwh": "http://www.ics.forth.gr/isl/VoIDWarehouse/VoID_Extension_Schema.owl#",
        "aws": "http://purl.oclc.org/NET/ssnx/meteo/aws#",
        "sh": "http://purl.org/skos-history/",
        "oslo": "http://purl.org/oslo/ns/localgov#",
        "stories": "http://purl.org/ontology/stories/",
        "sao": "http://salt.semanticauthoring.org/ontologies/sao#",
        "geovoid": "http://purl.org/geovocamp/ontology/geovoid/",
        "ccrel": "http://creativecommons.org/ns#",
        "xapi": "http://purl.org/xapi/ontology#",
        "gts": "http://resource.geosciml.org/ontology/timescale/gts#",
        "nerd": "http://nerd.eurecom.fr/ontology#",
        "ls": "http://linkedspending.aksw.org/instance/",
        "rdag2": "http://rdvocab.info/ElementsGr2/",
        "acrt": "http://privatealpha.com/ontology/certification/1#",
        "npdv": "http://sws.ifi.uio.no/vocab/npd#",
        "ilap": "http://data.posccaesar.org/ilap/",
        "limo": "http://www.purl.org/limo-ontology/limo#",
        "bmo": "http://collection.britishmuseum.org/id/ontology/",
        "security": "http://securitytoolbox.appspot.com/securityMain#",
        "ldr": "http://purl.oclc.org/NET/ldr/ns#",
        "sw": "http://linkedwidgets.org/statisticalwidget/ontology/",
        "bgn": "http://bibliograph.net/schemas/",
        "keys": "http://purl.org/NET/c4dm/keys.owl#",
        "pni": "http://data.press.net/ontology/identifier/",
        "scoro": "http://purl.org/spar/scoro/",
        "gm": "http://def.seegrid.csiro.au/isotc211/iso19107/2003/geometry#",
        "locah": "http://data.archiveshub.ac.uk/def/",
//??        "bgcat": "http://bg.dbpedia.org/resource/?????????:",
        "swpm": "http://spi-fm.uca.es/spdef/models/deployment/swpm/1.0#",
        "reegle": "http://reegle.info/schema#",
        "oplcert": "http://www.openlinksw.com/schemas/cert#",
        "lso": "http://linkedspending.aksw.org/ontology/",
        "isocat": "http://www.isocat.org/datcat/",
        "deps": "http://ontologi.es/doap-deps#",
        "oboinowl": "http://www.geneontology.org/formats/oboInOwl#",
        "h2o": "http://def.seegrid.csiro.au/isotc211/iso19150/-2/2012/basic#",
        "mmf": "http://linkedmultimedia.org/sparql-mm/ns/1.0.0/function#",
        "pnt": "http://data.press.net/ontology/tag/",
        "cpant": "http://purl.org/NET/cpan-uri/terms#",
        "nex": "http://www.nexml.org/2009/",
        "dsn": "http://purl.org/dsnotify/vocab/eventset/",
        "gl": "http://schema.geolink.org/",
        "itm": "http://spi-fm.uca.es/spdef/models/genericTools/itm/1.0#",
        "maso": "http://securitytoolbox.appspot.com/MASO#",
        "mmd": "http://musicbrainz.org/ns/mmd-1.0#",
        "dannet": "http://www.wordnet.dk/owl/instance/2009/03/instances/",
        "dcs": "http://ontologi.es/doap-changeset#",
        "hp": "http://pictogram.tokyo/vocabulary#",
        "shw": "http://paul.staroch.name/thesis/SmartHomeWeather.owl#",
        "oss": "http://opendata.caceres.es/def/ontosemanasanta#",
        "oad": "http://lod.xdams.org/reload/oad/",
        "lpeu": "http://purl.org/linkedpolitics/vocabulary/eu/plenary/",
        "ramon": "http://rdfdata.eionet.europa.eu/ramon/ontology/",
        "date": "http://contextus.net/ontology/ontomedia/misc/date#",
        "oplcb": "http://www.openlinksw.com/schemas/crunchbase#",
        "spcm": "http://spi-fm.uca.es/spdef/models/deployment/spcm/1.0#",
        "doas": "http://deductions-software.com/ontologies/doas.owl.ttl#",
        "pod": "https://project-open-data.cio.gov/v1.1/schema/#",
        "xlime": "http://xlime-project.org/vocab/",
        "bv": "http://purl.org/vocommons/bv#",
        "rmo": "http://eatld.et.tu-dresden.de/rmo#",
        "rvdata": "http://data.rvdata.us/",
        "kegg": "http://bio2rdf.org/ns/kegg#",
        "loted": "http://loted.eu/ontology#",
        "bbccms": "http://www.bbc.co.uk/ontologies/cms/",
        "bbccore": "http://www.bbc.co.uk/ontologies/coreconcepts/",
        "odrs": "http://schema.theodi.org/odrs#",
        "rs": "http://spektrum.ctu.cz/ontologies/radio-spectrum#",
        "gpml": "http://vocabularies.wikipathways.org/gpml#",
        "rdacct": "http://rdaregistry.info/termList/CollTitle/",
        "olca": "http://www.lingvoj.org/olca#",
        "dpc": "http://hospee.org/ontologies/dpc/",
        "affymetrix": "http://bio2rdf.org/affymetrix_vocabulary:",
        "lio": "http://purl.org/net/lio#",
        "rdagd": "http://rdaregistry.info/termList/gender/",
        "bner": "http://datos.bne.es/resource/",
        "rdapo": "http://rdaregistry.info/termList/RDAPolarity/",
        "gov": "http://gov.genealogy.net/ontology.owl#",
        "esequip": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/equipamiento#",
        "bibrm": "http://vocab.ub.uni-leipzig.de/bibrm/",
        "rdarm": "http://registry.info/termList/recMedium/",
        "glview": "http://schema.geolink.org/dev/view/",
        "rdafr": "http://rdaregistry.info/termList/frequency/",
        "rdamt": "http://rdaregistry.info/termList/RDAMediaType/",
        "oplecrm": "http://www.openlinksw.com/ontology/ecrm#",
        "rdaemm": "http://rdaregistry.info/termList/emulsionMicro/",
        "lemonuby": "http://lemon-model.net/lexica/uby/",
        "rdabm": "http://rdaregistry.info/termList/RDABaseMaterial/",
        "yo": "http://yovisto.com/",
        "religion": "http://rdf.muninn-project.org/ontologies/religion#",
        "ontosec": "http://www.semanticweb.org/ontologies/2008/11/OntologySecurity.owl#",
        "seas": "http://purl.org/NET/seas#",
        "oplmkt": "http://www.openlinksw.com/ontology/market#",
        "onc": "http://www.ics.forth.gr/isl/oncm/core#",
        "opengov": "http://www.w3.org/opengov#",
        "ldvm": "http://linked.opendata.cz/ontology/ldvm/",
        "rdatc": "http://rdaregistry.info/termList/trackConfig/",
        "d0": "http://ontologydesignpatterns.org/ont/wikipedia/d0.owl#",
        "c9d": "http://purl.org/twc/vocab/conversion/",
        "shoah": "http://dati.cdec.it/lod/shoah/",
        "ecgl": "http://schema.geolink.org/",
        "sakthi": "http://infotech.nitk.ac.in/research-scholars/sakthi-murugan-r/",
        "esco": "http://data.europa.eu/esco/model#",
        "pim": "http://www.w3.org/ns/pim/space#",
        "rdagw": "http://rdaregistry.info/termList/grooveWidth/",
        "chembl": "http://rdf.ebi.ac.uk/terms/chembl#",
        "wb": "http://data.worldbank.org/",
        "caplibacl": "http://schemas.capita-libraries.co.uk/2015/acl/schema#",
        "san": "http://www.irit.fr/recherches/MELODI/ontologies/SAN.owl#",
        "rdami": "http://rdaregistry.info/termList/modeIssue/",
        "rdafmn": "http://rdaregistry.info/termList/MusNotation/",
        "xcql": "http://docs.oasis-open.org/ns/search-ws/xcql#",
        "lsd": "http://linkedwidgets.org/statisticaldata/ontology/",
        "rdafnm": "http://rdaregistry.info/termList/FormNoteMus/",
        "emtr": "http://purl.org/NET/ssnext/electricmeters#",
        "condition": "http://www.kinjal.com/condition:",
        "rdacc": "http://rdaregistry.info/termList/RDAColourContent/",
        "bgdbp": "http://bg.dbpedia.org/property/",
        "clirio": "http://clirio.kaerle.com/clirio.owl#",
        "foo": "http://filmontology.org/ontology/1.0/",
        "ljkl": "http://teste.com/",
        "owsom": "https://onlinesocialmeasures.wordpress.com/",
        "dicera": "http://semweb.mmlab.be/ns/dicera#",
        "rdaftn": "http://rdaregistry.info/termList/TacNotation/",
        "bridge": "http://purl.org/vocommons/bridge#",
        "omnfed": "http://open-multinet.info/ontology/omn-federation#",
        "vidont": "http://vidont.org/",
        "escom": "http://vocab.linkeddata.es/datosabiertos/def/comercio/tejidoComercial#",
        "eccrev": "https://vocab.eccenca.com/revision/",
        "oae": "http://www.ics.forth.gr/isl/oae/core#",
        "ecglview": "http://schema.geolink.org/view/",
        "xrd": "http://docs.oasis-open.org/ns/xri/xrd-1.0#",
        "rdafs": "http://rdaregistry.info/termList/fontSize/",
        "rdasco": "http://rdaregistry.info/termList/soundCont/",
        "ev": "http://www.w3.org/2001/xml-events/",
        "lcdr": "http://ns.lucid-project.org/revision/",
        "rdact": "http://rdaregistry.info/termList/RDACarrierType/",
        "lden": "http://www.linklion.org/lden/",
        "rdagrp": "http://rdaregistry.info/termList/groovePitch/",
        "espresup": "http://vocab.linkeddata.es/datosabiertos/def/hacienda/presupuestos#",
        "saws": "http://purl.org/saws/ontology#",
        "lw": "http://linkedwidgets.org/ontologies/",
        "ha": "http://sensormeasurement.appspot.com/ont/home/homeActivity#",
        "rdafnv": "http://rdaregistry.info/termList/noteForm/",
        "rdasoi": "http://rdaregistry.info/termList/statIdentification/",
        "verb": "http://w3id.org/verb/",
        "rdaco": "http://rdaregistry.info/termList/RDAContentType/",
        "rdarr": "http://rdaregistry.info/termList/RDAReductionRatio/",
        "oxi": "http://omerxi.com/ontologies/core.owl.ttl#",
        "rml": "http://semweb.mmlab.be/ns/rml#",
        "bnf": "http://www.w3.org/2000/10/swap/grammar/bnf#",
        "cpsv": "http://purl.org/vocab/cpsv#",
        "bgdbr": "http://bg.dbpedia.org/resource/",
        "tadirah": "http://tadirah.dariah.eu/vocab/",
        "insdc": "http://ddbj.nig.ac.jp/ontologies/sequence#",
        "company": "http://intellimind.io/ns/company#",
        "eurostat": "http://wifo5-04.informatik.uni-mannheim.de/eurostat/resource/eurostat/",
        "bn": "http://babelnet.org/rdf/",
        "oml": "http://def.seegrid.csiro.au/ontology/om/om-lite#",
        "vacseen1": "http://www.semanticweb.org/parthasb/ontologies/2014/6/vacseen1/",
        "rdatr": "http://rdaregistry.info/termList/typeRec/",
        "changeset": "http://purl.org/vocab/changeset/schema#",
        "mtlo": "http://www.ics.forth.gr/isl/MarineTLO/v4/marinetlo.owl#",
        "lindt": "http://purl.org/NET/lindt#",
        "fdbp": "http://fr.dbpedia.org/property/",
        "rdapmt": "http://rdaregistry.info/termList/prodTactile/",
        "traffic": "http://www.sensormeasurement.appspot.com/ont/transport/traffic#",
        "beth": "http://www.google.com/",
        "um": "http://intelleo.eu/ontologies/user-model/ns/",
        "ncit": "http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#",
        "hasneto": "http://hadatac.org/ont/hasneto#",
        "rdabf": "http://rdaregistry.info/termList/bookFormat/",
        "lawd": "http://lawd.info/ontology/",
        "vag": "http://www.essepuntato.it/2013/10/vagueness/",
        "bfo": "http://www.ifomis.org/bfo/1.1#",
        "faldo": "http://biohackathon.org/resource/faldo#",
        "vstoi": "http://hadatac.org/ont/vstoi#",
        "ubiq": "http://server.ubiqore.com/ubiq/core#",
        "fnabox": "http://www.ontologydesignpatterns.org/ont/framenet/abox/",
        "lmx": "http://www.w3.org/XML/1998/namespace/",
        "mexcore": "http://mex.aksw.org/mex-core#",
        "phdd": "http://rdf-vocabulary.ddialliance.org/phdd#",
        "proms": "http://promsns.org/def/proms#",
        "decision": "https://decision-ontology.googlecode.com/svn/trunk/decision.owl#",
        "td5": "http://td5.org/#",
        "ops": "http://vocabularies.bridgedb.org/ops#",
        "faq": "http://www.openlinksw.com/ontology/faq#",
        "webservice": "http://www.openlinksw.com/ontology/webservices#",
        "quantity": "http://qudt.org/schema/quantity#",
        "rdaz": "http://rdaregistry.info/Elements/z/",
        "uneskos": "http://purl.org/voc/uneskos#",
        "cart": "http://purl.org/net/cartCoord#",
        "cwl": "https://w3id.org/cwl/cwl#",
        "d2d": "http://rdfns.org/d2d/",
        "odbc": "http://www.openlinksw.com/ontology/odbc#",
        "rofer": "http://rdaregistry.info/termList/rofer/",
        "cbo": "http://comicmeta.org/cbo/",
        "llont": "http://www.linklion.org/ontology#",
        "piero": "http://reactionontology.org/piero/",
        "esdir": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/direccionPostal#",
        "figigii": "http://www.omg.org/spec/FIGI/GlobalInstrumentIdentifiers/",
        "lheo": "http://www.conjecto.com/ontology/2015/lheo#",
        "jerm": "http://www.mygrid.org.uk/ontology/JERMOntology#",
        "imind": "http://schema.intellimind.ns/symbology#",
        "bsym": "http://bsym.bloomberg.com/sym/",
        "mexalgo": "http://mex.aksw.org/mex-algo#",
        "mexv": "http://mex.aksw.org/mex-algo#",
        "incident": "http://vocab.resc.info/incident#",
        "ofrd": "http://purl.org/opdm/refrigerator#",
        "mbgd": "http://mbgd.genome.ad.jp/owl/mbgd.owl#",
        "daq": "http://purl.org/eis/vocab/daq#",
        "cwork": "http://www.bbc.co.uk/ontologies/creativework/",
        "essglobal": "http://purl.org/essglobal/vocab/v1.0/",
        "rofch": "http://rdaregistry.info/termList/rofch/",
        "aktivesa": "http://sa.aktivespace.org/ontologies/aktivesa#",
        "remetca": "http://www.purl.org/net/remetca#",
        "lsqv": "http://lsq.aksw.org/vocab#",
        "eclap": "http://www.eclap.eu/schema/eclap/",
        "rofem": "http://rdaregistry.info/termList/rofem/",
        "sct": "http://snomed.info/sct/",
        "cff": "http://purl.oclc.org/NET/ssnx/cf/cf-feature#",
        "airs": "https://raw.githubusercontent.com/airs-linked-data/lov/latest/src/airs_vocabulary.ttl#",
        "esapar": "http://vocab.linkeddata.es/datosabiertos/def/urbanismo-infraestructuras/aparcamiento#",
        "luc": "http://www.ontotext.com/owlim/lucene#",
        "geojson": "http://ld.geojson.org/vocab#",
        "demlab": "http://www.demcare.eu/ontologies/demlab.owl#",
        "gont": "https://gont.ch/",
        "rofrm": "http://rdaregistry.info/termList/rofrm/",
        "r4r": "http://guava.iis.sinica.edu.tw/r4r/",
        "data": "http://data.odw.tw/",
        "lu": "http://www.ontologydesignpatterns.org/ont/framenet/abox/lu/",
        "dm2e": "http://onto.dm2e.eu/schemas/dm2e/",
        "frame": "http://www.ontologydesignpatterns.org/ont/framenet/abox/frame/",
        "gist": "http://ontologies.semanticarts.com/gist#",
        "itcat": "http://th-brandenburg.de/ns/itcat#",
        "rfd": "http://com.intrinsec//ontology#",
        "rofet": "http://rdaregistry.info/termList/rofet/",
        "lgdt": "http://linkedgeodata.org/triplify/",
        "lgdm": "http://linkedgeodata.org/meta/",
        "rofit": "http://rdaregistry.info/termList/rofit/",
        "fe": "http://www.ontologydesignpatterns.org/ont/framenet/abox/fe/",
        "amsl": "http://vocab.ub.uni-leipzig.de/amsl/",
        "rofrr": "http://rdaregistry.info/termList/rofrr/",
        "rgml": "http://purl.org/puninj/2001/05/rgml-schema#",
        "rofid": "http://rdaregistry.info/termList/rofid/",
        "newsevents": "http://www.aifb.uni-karlsruhe.de/WBS/uhe/ontologies#",
        "swcomp": "https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#",
        "isbdu": "http://iflastandards.info/ns/isbd/unc/elements/",
        "vocnet": "http://schema.vocnet.org/",
        "sdshare": "http://www.sdshare.org/2012/extension/",
        "crmdig": "http://www.ics.forth.gr/isl/CRMext/CRMdig.rdfs/",
        "rofim": "http://rdaregistry.info/termList/rofim/",
        "edgarcik": "http://edgarwrap.ontologycentral.com/cik/",
        "rofhf": "http://rdaregistry.info/termList/rofhf/",
        "orth": "http://purl.jp/bio/11/orth#",
        "voc": "http://voc.odw.tw/",
        "estrf": "http://vocab.linkeddata.es/datosabiertos/def/transporte/trafico#",
        "mexperf": "http://mex.aksw.org/mex-perf#",
        "scor": "http://purl.org/eis/vocab/scor#",
        "ost": "http://w3id.org/ost/ns#",
        "orges": "http://datos.gob.es/def/sector-publico/organizacion#",
        "orgesv2": "http://datos.gob.es/sites/default/files/OntologiaDIR3/orges.owl#",
        "tix": "http://toptix.com/2010/esro/",
        "rofin": "http://rdaregistry.info/termList/rofin/",
        "minim": "http://purl.org/minim/minim#",
        "fluidops": "http://www.fluidops.com/",
        "ogc": "http://www.opengis.net/ont/geosparql#",
        "csvw": "http://www.w3.org/ns/csvw#",
        "vf": "https://w3id.org/valueflows/",
        "ns1": "http://www.w3.org/1999/xhtml/vocab#",
        "rm": "http://jazz.net/ns/rm#",
        "dgfr": "http://colin.maudry.com/ontologies/dgfr#",
        "mv": "http://eccenca.com/mobivoc/",
        "auto": "http://auto.schema.org/",
        "eccauth": "https://vocab.eccenca.com/auth/",
        "efd": "http://data.foodanddrinkeurope.eu/ontology#",
        "rofsm": "http://rdaregistry.info/termList/rofsm/",
        "puml": "http://plantuml.com/ontology#",
        "goog": "http://schema.googleapis.com/",
        "moo": "http://www.movieontology.org/2009/11/09/movieontology.owl#",
        "oplweb": "http://www.openlinksw.com/schemas/oplweb#",
        "door": "http://kannel.open.ac.uk/ontology#",
        "rofsf": "http://rdaregistry.info/termList/rofsf/",
        "pid": "http://permid.org/ontology/organization/",
        "rofrt": "http://rdaregistry.info/termList/rofrt/",
        "fntbox": "http://www.ontologydesignpatterns.org/ont/framenet/tbox/",
        "odw": "http://odw.tw/",
        "srx": "http://www.w3.org/2005/sparql-results#",
        "valueflows": "https://w3id.org/valueflows/",
        "pcit": "http://public-contracts.nexacenter.org/id/propertiesRole/",
        "rut": "http://rdfunit.aksw.org/ns/core#",
        "dqv": "http://www.w3.org/ns/dqv#",
        "ali": "http://www.niso.org/schemas/ali/1.0/",
        "uby": "http://purl.org/olia/ubyCat.owl#",
        "csdbp": "http://cs.dbpedia.org/",
        "cue": "http://www.clarin.eu/cmdi/cues/display/1.0#",
        "output": "http://volt-name.space/vocab/output#",
        "lswmo": "http://ontology.cybershare.utep.edu/ELSEWeb/elseweb-modelling.owl#",
        "dsv": "http://purl.org/iso25964/DataSet/Versioning#",
        "psv": "http://www.wikidata.org/prop/statement/value/",
        "text": "http://jena.apache.org/text#",
        "volt": "http://volt-name.space/ontology/",
        "ideotalex": "http://www.ideotalex.eu/datos/recurso/",
        "eccdi": "https://vocab.eccenca.com/di/",
        "input": "http://volt-name.space/vocab/input#",
        "elod": "http://linkedeconomy.org/ontology#",
        "eli": "http://data.europa.eu/eli/ontology#",
        "lcsh": "http://id.loc.gov/authorities/subjects/",
        "wikibase": "http://wikiba.se/ontology#",
        "uom": "http://www.opengis.net/def/uom/OGC/1.0/",
        "estatgph": "http://estatwrap.ontologycentral.com/id/nama_aux_gph#",
        "wsdl": "http://www.w3.org/ns/wsdl-rdf#",
        "jolux": "http://data.legilux.public.lu/schema/jolux/",
        "qms": "http://data.europa.eu/esco/qms#",
        "opllog": "http://www.openlinksw.com/ontology/logging#",
        "smxm": "http://smxm.ga/",
        "gns": "http://sws.geonames.org/",
        "scholl": "http://menemeneml.com/school#",
        "aozora": "http://purl.org/net/aozora/",
        "theme": "http://voc.odw.tw/theme/",
        "rpath": "https://w3id.org/lodsight/rdf-path#",
        "wde": "http://www.wikidata.org/entity/",
        "iiif": "http://iiif.io/api/image/2#",
        "dio": "https://w3id.org/dio#",
        "fire": "http://tldp.org/HOWTO/XML-RPC-HOWTO/xmlrpc-howto-java.html#"
  };
/**
 bif	 bif:
 sql	 sql:
**/
}


Namespace.prototype = {
  get_ns_desc : function()
  {
    var s = "";
    $.each(this.ns_list, function(pref, link_url) {
      s += "@prefix "+pref+": <"+link_url+"> .\n";
      return true;
    });
    return s;
  },
  
  has_known_ns : function (str) 
  {
    function s_startWith(str, val) {
      return str.lastIndexOf(val, 0) === 0;
    }

    var rc = null;
    $.each(this.ns_list, function(pref, link_url) {
      if (s_startWith(String(str),link_url)) {
        rc = { ns:pref, link:link_url };
        return false;
      } 
      return true;
    });
    return rc;
  },
  
}
  
  

Handle_Microdata = function () {
  this.callback = null;
};

Handle_Microdata.prototype = {
  parse : function(jsonData, docURL, callback) {
    this.callback = callback;
    var self = this;
    try 
    {
      var conv = new MicrodataJSON_Converter();
      var out_data = conv.transform(jsonData, docURL);

      var html_data = new HTML_Gen().load(out_data);
      self.callback(null, html_data);
    } 
    catch (ex) {
      self.callback(ex.toString(), null);
    }
  }

}



Handle_Turtle = function (start_id) {
  this.callback = null;
  this.baseURI = null;
  this._pos = 0;
  this._output = null;
  this.start_id = 0;
  if (start_id!==undefined)
    this.start_id = start_id;
  this.ns_pref = null;
  this.ns_pref_size = 0;
  this.skip_error = false;
  this.skipped_error = [];
  this._pattern = /([0-9]*).$/gm;
};

Handle_Turtle.prototype = {

  parse : function(textData, docURL, callback) {
    this.callback = callback;
    this.baseURI = docURL;
    var self = this;

    if (this._pos < textData.length) {
      var store = new N3DataConverter();
      var parser = N3.Parser();
      try {
        var ttl_data = textData[self._pos];
        if (this.ns_pref!==null)
          ttl_data = this.ns_pref + ttl_data;

        parser.parse(ttl_data,
          function (error, tr, prefixes) {
            if (error) {
              error = ""+error;
              if (self.ns_pref_size>0) { // fix line in error message
                try {
                  var m = self._pattern.exec(error);
                  if (m!==null) 
                    error = error.substr(0,m.index)+(parseInt(m[1])-self.ns_pref_size-1);
                } catch(e) {}
              }

              if (self.skip_error) {
                self.skipped_error.push(error);
                self._pos++;

                if (self._pos < textData.length)
                  self.parse(textData, docURL, self.callback);
                else
                  self.callback(null, self._output);
              } 
              else 
              {
                self.error = error;
                self.callback(self.error, null);
              }
            }
            else if (tr) {
              store.addTriple(self.fixNode(tr.subject), 
                              self.fixNode(tr.predicate), 
                              self.fixNode(tr.object));
            }
            else {
              if (self._output===null)
                self._output = "";
              
              var triples = store.output;

              var html_str =  new HTML_Gen().load(triples, self.start_id);
              self._output += (html_str==null?"":html_str);
              self._pos++;

              if (triples!==null && triples.length!==undefined)
                self.start_id+= triples.length;

              if (self._pos < textData.length)
                self.parse(textData, docURL, self.callback);
              else
                self.callback(null, self._output);
            }
          });
      } catch (ex) {
        self.callback(ex.toString(), null);
      }
    } else {
        self.callback(null, this._output);
    }

  },


  fixNode : function (n) 
  {
     if ( n==="")
         return this.baseURI;
     else if (N3.Util.isIRI(n)) {
       if (n==="")
         return this.baseURI;
       else if (n.substring(0,1)==="#") 
         return this.baseURI+n;
       else if (n.substring(0,1)===":") 
         return this.baseURI+n;
       else
         return n;
     } else {
       return n;
     }
  }

}




Handle_JSONLD = function () {
  this.callback = null;
  this._pos = 0;
  this._output = null;
  this.start_id = 0;
  this.skip_error = false;
  this.skipped_error = [];
};

Handle_JSONLD.prototype = {

  parse : function(textData, docURL, callback) {
    this.callback = callback;
    var self = this;

    if (this._pos < textData.length) 
    {
      try {
        jsonld_data = JSON.parse(textData[this._pos]);
        if (jsonld_data != null) {
          jsonld.expand(jsonld_data, 
            function(err, expanded) {
              if (err) {
//??todo
                self.callback(""+err, null);
              }
              else {
                jsonld.toRDF(expanded, {format: 'application/nquads'}, 
                  function(err, nquads) {
                    if (err) {
                      self.callback(""+err, null);
                    }
                    else {
                      var handler = new Handle_Turtle(self.start_id);
                      handler.parse([nquads], docURL, function(error, html_data) {
                        if (error) {
                          self.callback(""+error, null);
                        }
                        else {
                          if (self._output===null)
                            self._output = "";

                          self._output += html_data;
                          self._pos++;
                          self.start_id += handler.start_id;
 
                          if (self._pos < textData.length)
                            self.parse(textData, docURL, self.callback);
                          else
                            self.callback(null, self._output);
                        }
                      });
                    }
                });
              }
            })
        }
        else
          self.callback(null, null);
      } catch (ex) {
        self.callback(ex.toString(), null);
      }

    } else {
       self.callback(null, this._output);
    }

  }


}



Handle_RDFa = function () {
  this.callback = null;
};

Handle_RDFa.prototype = {

  parse : function(data, callback) {
    this.callback = callback;

    var self = this;
    try {
      var str = new HTML_Gen().load(data);
      self.callback(null, str);
    } catch (ex) {
      self.callback(ex.toString(), null);
    }
  }

}






//Convert N3 data to internal format
function N3DataConverter(options) {
  this._LiteralMatcher = /^"([^]*)"(?:\^\^(.+)|@([\-a-z]+))?$/i;
  this.RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
  this.RDF_TYPE   = this.RDF_PREFIX + 'type';
  this.output = [];
}

N3DataConverter.prototype = {
  addTriple: function (subj, pred, obj) 
  {
      var s = null;
      var o = null;

      for(var i=0; i < this.output.length; i++)
        if (this.output[i].s === subj) {
          s = this.output[i];
          break;
        }

      if (s == null) {
        s = {s:subj, n: this.output.length+1};
        this.output.push(s);
      }

      if (s.props === undefined) 
        s.props = new Object();
      if (s.props_obj === undefined) 
        s.props_obj = new Object();
      
      var p = s.props[pred];
      var p_obj = s.props_obj[pred];
      if  (p === undefined) {
         s.props[pred] = [];
         s.props_obj[pred] = {};
      }

      p = s.props[pred];
      p_obj = s.props_obj[pred];

      if (!p_obj[obj]) 
      {
        p_obj[obj]=1;

        if (obj[0] !=='"') {
          p.push({iri :obj});
        }
        else {
          var match = this._LiteralMatcher.exec(obj);
          if (!match) throw new Error('Invalid literal: ' + obj);
          p.push({
             value:match[1], 
             type:match[2], 
             lang:match[3]
            });
        }
      }

  }
}


//Convert Microdata JSON to internal format
function MicrodataJSON_Converter(options) {
  this._LiteralMatcher = /^"([^]*)"(?:\^\^(.+)|@([\-a-z]+))?$/i;
  this.RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#';
  this.RDF_TYPE   = this.RDF_PREFIX + 'type';
  this.output = [];
  this.last_Bnode = 0;
  this.baseURI;
}

MicrodataJSON_Converter.prototype = {
  transform: function (json, baseURI) 
  {
      this.baseURI = baseURI;
      var self = this;
      var out = [];

      for(var i=0; i < json.items.length; i++)
      {
        var item = json.items[i];
        var rc = this.expand_item(item);
        out.push(rc.data);
        out = out.concat(rc.data_add);
      }

      for(var i=0; i < out.length; i++)
      {
        out[i]["n"] = i+1;
        if (!out[i].s)
          out[i]["s"] = baseURI;
      }

      return out;
  },

  new_bnode : function() 
  {
    this.last_Bnode++;
    return "_:bb"+this.last_Bnode;
  },

  expand_item : function(item) 
  {
    var self =this;
    var out = { };
    var out_add = [];
    var retVal = { id:null, data:{}, data_add:[] };
    var i_props = null;
    var props = {};
    var id_ns = null;

    retVal.data = out;
    retVal.data_add = out_add;
    out["props"] = props;

    //try get current NS
    if (item.type!==undefined) {
      var ns_list = new Namespace();
      if ($.isArray(item.type)) {
        for(var i=0; i<item.type.length; i++) {
          id_ns = ns_list.has_known_ns(String(item.type[i]));
          if (id_ns)
            break;
        }
      } else {
        id_ns = ns_list.has_known_ns(String(item.type));
      }
    }


    $.each(item, function(key, val) 
     {
       if (key==="properties") {
         i_props = val;
       }
       else if (key==="id") 
       {
         if (val.indexOf(':') === -1)
           val = ":"+val;
         out["s"]=val;
         retVal.id = val;
       } 
       else if (key==="type") 
       {
         if ($.isArray(val)) {
           for(var i=0; i<val.length; i++) {
             if (val[i].indexOf(':') === -1)
               val[i] = { "iri" : ":"+val[i], typeid:1};
             else
               val[i] = { "iri" : val[i], typeid:1};
           } 
         } 
         else {
           if (val.indexOf(':') === -1)
               val = [{ "iri" : ":"+val, typeid:1}];
           else
               val = [{ "iri" : val, typeid:1}];
         } 
         props[self.RDF_TYPE] = val;
       } 
       else 
       {
         if (key.indexOf(':') === -1)
            key = ":"+key;

         if ($.isArray(val))
           props[key]=val;
         else
           props[key]=[val];
       }
     });


      function expand_sub_item(parent, val) 
      {
         var rc = self.expand_item(val);
         if (!rc.id) {
           var bnode = self.new_bnode();
           rc.id = bnode;
           rc.data.s = bnode;
         }
         parent.push({ "iri" : rc.id });
         out_add.push(rc.data);
         for(var i=0; i<rc.data_add.length; i++)
           out_add.push(rc.data_add[i]);
      }

      function handle_val(v_lst, val)
      {
         if (String(val).indexOf('[object Object]') === 0)
           expand_sub_item(v_lst, val); 
         else if (val.substring(0,7) ==="http://")
           v_lst.push({ "iri" : val});
         else if (val.substring(0,8) ==="https://")
           v_lst.push({ "iri" : val});
         else
           v_lst.push({ "value" : val}); //??todo parse literal
/**
      else {
        var match = this._LiteralMatcher.exec(obj);
        if (!match) throw new Error('Invalid literal: ' + obj);
        p.push({
             value:match[1], 
             type:match[2], 
             llang:match[3]});
      }
****/
      }

    
    if (i_props) {
      $.each(i_props, function(key, val) 
      {
        if (key.indexOf(':') === -1) {
          if (id_ns) 
            key = id_ns.link+key;
          else
            key = ":"+key;
        }

       var v = [];
/**
       if (!$.isArray(val) && String(val).indexOf('[object Object]') === 0)
       {
           expand_sub_item(v, val);
       }
       else {
         for(var i=0; i<val.length; i++) {
           if (String(val[i]).indexOf('[object Object]') === 0) //isArray lenght=1, el == Object
             expand_sub_item(v, val[i]); 
           else if (val[i].substring(0,7) ==="http://")
             v.push({ "iri" : val[i]});
           else if (val[i].substring(0,8) ==="https://")
             v.push({ "iri" : val[i]});
           else
             v.push({ "value" : val[i]}); 
         }
       }
**/
       if ($.isArray(val))
       {
         for(var i=0; i<val.length; i++)
           handle_val(v, val[i]);
       }
       else 
       {
         handle_val(v, val);
       }

       props[key] = v;
        
      });
    }

    return retVal;
  }

}
