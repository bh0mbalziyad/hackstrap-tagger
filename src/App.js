import React from 'react';
import './App.css';
import { SubstringTagger } from './components/Substring/SubstringTagger';

function App() {
  const Content = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ut sequi illum at autem reiciendis, tempora pariatur, quos dolores explicabo quisquam ad in, temporibus nulla sint! Soluta natus accusantium nemo?
    Adipisci atque ex placeat tempore voluptatibus facilis possimus neque repudiandae illum impedit pariatur nihil vitae perspiciatis nulla dolores quam officia assumenda libero molestias maiores, voluptas rerum quia repellendus. Possimus, laboriosam?
    Nisi ex reiciendis perferendis obcaecati, similique qui, consequuntur perspiciatis dolore doloribus laboriosam esse quibusdam? Explicabo quos porro ut aspernatur, dolor, magni animi maiores iure totam ipsa accusamus, ratione placeat consequatur!
    Voluptatibus consequuntur alias doloribus quibusdam voluptatum eum exercitationem quo architecto doloremque soluta velit, qui hic minima accusamus ex ratione debitis pariatur quia ipsam nisi eaque! Possimus facilis provident quasi nihil!
    Fuga suscipit perspiciatis aperiam? Dolorem accusantium quos ratione, in error fugit vel atque sequi, placeat commodi vitae iure totam aut aperiam ex rerum consectetur quod asperiores nulla corrupti magnam optio!
    Veniam cum error repudiandae fuga est eaque alias velit nam perspiciatis reiciendis? Dolorum, fugiat rerum voluptate autem error minima. Quae minus nam reprehenderit atque molestiae, in optio. Quis, repellendus sed?
    Perferendis nostrum consectetur tempora recusandae soluta vero dolor facere repudiandae in sapiente, nobis numquam commodi. Quas animi suscipit dignissimos odit porro provident corporis a est, repellendus aliquid aspernatur voluptatem tempora.
    Aliquid ipsam delectus modi ea magnam at quibusdam perferendis dolore nam illum eos, ab error saepe repellat dolor nobis optio blanditiis pariatur fuga voluptatibus ex iure suscipit eligendi repellendus. Quod!
    Veniam quia corrupti iste iusto eos, minima facere tenetur aperiam facilis illum itaque quasi! Magni, repellat velit eaque voluptate cumque quis aut nulla at dolorem, vel earum expedita laudantium neque.
    Eius tempore nam iste soluta itaque iusto, reiciendis ea sequi est perspiciatis velit? Recusandae, quae? Id laboriosam repudiandae est officia sapiente error debitis, porro deserunt praesentium maiores eos ex omnis.
    Assumenda, possimus accusantium? Itaque vel consequuntur excepturi fugit inventore ad, eligendi nihil! Dicta assumenda pariatur vero minima maxime aliquam, repellendus, incidunt nesciunt vel facilis ipsum. Eum provident iste quae error!
    Similique maiores necessitatibus reiciendis vitae odit vero debitis molestias ipsum, facilis eius recusandae odio dolores harum veritatis nostrum sequi corrupti ut quia voluptatibus iste suscipit. Sit modi id illo qui.
    Enim, quidem quibusdam! Praesentium ipsum quod suscipit beatae aut. Cupiditate, dolore ut laudantium reiciendis ex eius eos distinctio quo similique corrupti consectetur quaerat blanditiis ab odio reprehenderit earum non laborum.
    Eligendi ea eveniet dolor vero, non recusandae maiores officia ipsam assumenda suscipit consequuntur natus quo ad tempore aut sed laudantium mollitia animi error dignissimos libero beatae. Possimus, ducimus cum? Nihil?
    Voluptatem et laborum repudiandae ea neque sit fuga quis explicabo asperiores enim iusto debitis fugiat ipsam perferendis rerum, at aliquam. Aliquid cumque, quod pariatur voluptas cupiditate sapiente ipsa error corrupti!
    Est unde odio explicabo magni rerum dolorum nesciunt eius quidem reprehenderit repellat mollitia, molestias architecto ab? Nesciunt provident illo ad doloribus similique soluta, ipsam iusto voluptatum minus exercitationem sit nam?
    Officia totam eligendi delectus magnam veniam a sint, vero magni est voluptatem! Illum itaque nulla, doloribus, similique illo vel iusto repellat laudantium vero dolor ratione labore possimus hic laboriosam officiis?
    Dolor vitae, quos mollitia ipsam fuga ut dignissimos repellendus error aspernatur maxime consequatur voluptatibus, tenetur velit non assumenda labore eaque voluptatem, molestiae quaerat pariatur? Sapiente velit voluptatibus doloremque eum! Porro.
    Voluptatibus eaque ullam eos, mollitia quaerat error esse accusamus beatae, omnis aut quos. Omnis aut possimus, optio iste aperiam saepe blanditiis quisquam incidunt autem sapiente, dolorum nobis dolor. Nihil, impedit.
    Provident, sint sit? Quae beatae atque dolores eos ex fuga! Accusantium nemo mollitia optio totam fuga necessitatibus, libero nisi id assumenda tempora, quibusdam ipsam magni eius hic molestiae vel quaerat.
    Soluta animi sapiente odio autem molestias, voluptatibus dolorum expedita, quaerat similique quas velit rerum in magni impedit. Commodi qui eos veniam, soluta praesentium temporibus quos ipsum est dicta quibusdam ut.
    Excepturi reprehenderit voluptatibus id esse mollitia ullam repellendus. Consequatur voluptatem veritatis possimus cum autem ducimus dolor! Obcaecati vitae, iure deserunt dolorum accusamus delectus nam? Earum illum voluptatibus rerum quam nostrum.
    Nobis laudantium, harum temporibus tenetur dicta expedita nam dignissimos ad officia quos voluptate sequi amet impedit. Enim modi quia natus molestiae repellat perferendis iusto ducimus facere, voluptate laboriosam doloribus distinctio!
    Vero officia dolor modi omnis optio est! Fugit maxime magni atque provident officiis quisquam soluta hic rem placeat numquam magnam at ab quo saepe vero, delectus aliquam quaerat. Excepturi, aliquam.
    Blanditiis officiis, magni ea fugiat sunt libero dignissimos laborum quos, quaerat eaque quisquam eligendi reiciendis impedit tempora iure asperiores, ducimus magnam. Porro id, dolorem excepturi nesciunt aliquam officia nemo numquam!
    Totam voluptatem facere dolorem accusamus, quasi harum eveniet, mollitia ipsum culpa soluta commodi dolore corrupti vitae nulla aut vel earum non quas? Optio maiores voluptatibus consequuntur quae neque voluptas ipsam!
    A quod voluptatem nam non nulla? Praesentium vero itaque eius natus magnam odio rerum totam, rem facilis sint earum accusamus animi? Expedita ex dolores nisi repellat porro hic esse. Ipsa?
    Quam quo consequatur pariatur, animi minus officia consequuntur voluptatibus ratione facere eaque provident neque molestias quae alias, quasi reiciendis debitis tempora exercitationem harum placeat? Velit magni voluptatum molestiae possimus quisquam!
    Repellat hic odio praesentium porro optio ex earum temporibus exercitationem nemo aspernatur ipsum asperiores aperiam numquam suscipit enim, ad consectetur ratione. Fugiat libero provident quaerat quia esse natus nesciunt repellat!
    Ullam beatae, nisi libero quaerat vel dignissimos sed nostrum tempora eveniet, ad ipsum hic odit vero officiis praesentium. Voluptas nam expedita similique magnam nostrum quo eum dolores quae corporis! Illo?`;
  const data = {
    text: Content,
    nerTags: [
      {
        subString: 'assumenda',
        tag: 'Verb'
      },
      {
        subString: 'dolorem',
        tag: 'Pronoun'
      },
      {
        subString: 'repellendus',
        tag: 'Noun'
      },
      {
        subString: 'nostrum',
        tag: 'Adjective'
      },
      {
        subString: 'suscipit',
        tag: 'Article'
      },
      {
        subString: 'optio',
        tag: 'Hyperblee'
      }
    ]
  };
  return (
    <div className='App'>
      <div>
        <SubstringTagger data={data} />
      </div>
    </div>
  );
}

export default App;
