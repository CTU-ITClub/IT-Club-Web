import LogoCarousel from "./LogoCarousel";

interface ActivitiesSection_Props {
  isDark: boolean;
}

const LOGOS_Workshop = [
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/626734308_1480557950557403_2648965197293177074_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHI6d9wkNEnqlHw9JOuDqSlh-giJa7GqBSH6CIlrsaoFIZV27dViNWUiXPSEQE3uZuRjRb3ndOfgK9tnxTLcKRI&_nc_ohc=YcXI-rKM9MgQ7kNvwFggqnB&_nc_oc=AdpbUl60pK6dQPjJHxEB5eN7RiFdaWhqTBKoPNazpQF3mov4e83Zm_1MPepU2Gpm5SUqCScAt3Fy-PtHsPxmDZNx&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=Tt36YHNTaTsupnv1H0iSVw&_nc_ss=7b2a8&oh=00_Af5k7tbKb-1_1judMLWJ3bP3exJPsLWTD3pSyp--l9_U-w&oe=6A20485C",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/629248946_1480558007224064_1442076014911408627_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE80wwjRv_ZE1qaptYV8Lr0-DfybDWVdRP4N_JsNZV1E1pjdh3w_-GbiUXIdrjz7Np-9-wVnwZvi58IzOAZozpQ&_nc_ohc=VXoDct-NauMQ7kNvwHwuJpq&_nc_oc=Adr1kESefKi_tnRoTwhv-Jmf7houZ6waMLDg-aqTz8J9NoS1OIm-WG2U87PIg1l8qSwh7noh6eVaml_VPG-Tej-s&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=QTytPET12F1SuJWtx9pujQ&_nc_ss=7b2a8&oh=00_Af6U1D-xyaBnpGb62Q7G4rgO_S2Xuh-XuXA2aNRFZ1PKMQ&oe=6A204A84",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/628015598_1480558003890731_2655353496123430491_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFPmE2FufznN4b0_jjp5mAukQvV6VAiiQGRC9XpUCKJAWdJsWPjlvxcgMU8Y9NmnsMSNvE1OOrzlYQHyMO90KY4&_nc_ohc=2hLQ0fUX0icQ7kNvwGJsMCE&_nc_oc=AdpDjFj5LgopeIysGRPaQj4KP6RefWMj8GQjVyWfc0cMubcXTwQauwlBGA3afgb0rGqhFCvsV03ZKhfPwL-TmekU&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=FDro5q9OvCg478Bu_fPw4A&_nc_ss=7b2a8&oh=00_Af6sKskEIaztk-a64-VtxgxpHR4U07XxlYLQBr8dWFIV_w&oe=6A20341A",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/627256214_1480558040557394_2747516406667750157_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHKgA4GspgANE1wh3CBlXCY2XcqbHHOn7fZdypscc6ftyva3Sz6hSlw0mAXMUkCHGbaO7T6rmlxT5s9rocaTDNA&_nc_ohc=FD7CoKmyUj4Q7kNvwFmT1Q8&_nc_oc=AdpPQ-figgQVtSlg2pA9lGhZCEjQ0J8m1fRXvqetjuB61rALcv9fQ2jDQT00o9bz7XNWPhQyqGkguRNOdifcJRqa&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=BZMzF82dE77vqalsSIYdOw&_nc_ss=7b2a8&oh=00_Af7Mc0OiCa7LJdPY6eBzAN4VgVletv3_PuaMHjAPH7gJSw&oe=6A204E84",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/628191266_1480558887223976_3071736256476518875_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGoSF8wEN6j0wlxoDx2kd6qMNovSzAIAIMw2i9LMAgAgwnYyCZ6QQ6qoSrNRCa6xhCiLFn7u58SOKj6_DRraqfx&_nc_ohc=s6WmFPgxYmoQ7kNvwFre4Ez&_nc_oc=Adpp5_QNlY7TtAWVH2rLCVX5MLkDgR5zQksj-mLoUfklMB-XkvmEdqaPzMtkA8zznECgLqLX4-kAwyHOeieo12yB&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=VeYmX6nP4BDVpGP_sLcX_w&_nc_ss=7b2a8&oh=00_Af6gFb4Bluvs5PxKtTs6aHE33u25Et80UgORTiHWF2KekQ&oe=6A204925",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/629353755_1480558010557397_4077065637617181659_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFObRyGVnhuT8U346_hap0zLzcxzPpGR8gvNzHM-kZHyFa7gHgCYlE0FDNwGN3d223g9IzXmEOmELprUPARk8go&_nc_ohc=twJTpBjUVHYQ7kNvwHugR-h&_nc_oc=AdrAN4ZWg7t2-dfEd6_0EsvyOyYcWt2sfWz9LrzogBgjqpHoJsFpA-aEZ9cYKQ2oLfAC71faJ5PLE4cKs3ucP5JD&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=rRGkl5raEcXmLAnNTRXdmA&_nc_ss=7b2a8&oh=00_Af6negUJ3R4W6KaUmlj53wSLcsXwVf6XZ-Mkmxc5UjkrIw&oe=6A205F41",
];

const LOGOS_Game = [
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/657173409_1525823052697559_3491735791438855593_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcaaI6hncPX76xzKv-86c4JIv9Nkcu6gEki_02Ry7qATRpeAichEP1N7D4-o08_7A6hvsMaxKtEmAI_WCMlx1_&_nc_ohc=lA21II0idD8Q7kNvwGazEVd&_nc_oc=AdrJxJmmEhBPLj79M_I6zI07ac2TE-mnRL2abZkimoLZCUY_Xbk-y_3skEMaAwF7KxTlDr-KrWE8hXqOQVLRbdVQ&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=aJ-Nsny3KkmNyajgnVEVOA&_nc_ss=7b2a8&oh=00_Af5atOstLmiSEd-89-687NnnHNGq_Ye2nwTGimwkRprzRA&oe=6A202FA6",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/658136258_1525823302697534_7734319932916724476_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGxsE45duNkhFlAOk7WJMvr-YpiC22WfgT5imILbZZ-BH9MVZ7u1tOFXKtSk_NyVysIbFmcegl__Q669keIzNyn&_nc_ohc=tZTseA7gaMQQ7kNvwGw39ab&_nc_oc=AdqoXVV2IBCBmYYemxcclSLQXlTSzvM2xN4dFERLeFsAYRPOC-7_UyDfKoXbb9m1MYEb6tqyqjfGomK71riBxkVK&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=6UFt1Kxh5W1fjqMuP7HQHQ&_nc_ss=7b2a8&oh=00_Af7ymqRln7In_Qk2l7gXY8qTnX8gUnYsUjyYEZ6zcZzvSA&oe=6A20581B",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/658136414_1525823442697520_6702084762250871734_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhKL1Ki8b-rk4_l6NxxoDppdmSWtO2l-Ol2ZJa07aX41u7fkvvm6hyENHMmOZ5eGOm34NY3CIRhkMNjFV6ql9l&_nc_ohc=knH6bf7DH9oQ7kNvwH2idYS&_nc_oc=AdopE8JsU2aL0juUW1H98309dpJQEUm9UH7V_OaZhuABJHWA7UgkYWmM9YaznUxc_Edu4Yy6G9Yzc-Kln1xyqtKE&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=Tpqjy_cv7nQn0L0kwggqbQ&_nc_ss=7b2a8&oh=00_Af4KNJhljOeZciEGhTNK390NXjdfkVne2Z37ZeyHhPLG8w&oe=6A204FA8",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/658112408_1525823619364169_2656015095863835323_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH1R2XGkCLhnVCZZaeNr4Xm2jmMLYDVJIfaOYwtgNUkhz3NLPEtG1tFpJYy0sbFCAFnODf94M1wU19ZlH7J31Aj&_nc_ohc=7z1U7-D1uuwQ7kNvwFv5lHO&_nc_oc=AdoKlVLTHjrJcXhXU4FHHkQtQwwR3OY9H1H7xIfv6YWZEkKUPcFi7DlaCMPmbhsZgXZT9ihoSENCzaKEUnecy3-c&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=oh_Z_FHyQ60sNszOqltl1w&_nc_ss=7b2a8&oh=00_Af4--7poOgxA9gjoOHVccgIHWtyQizLOd0iOrvz-Pp_NLw&oe=6A203EB2",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/656907648_1525823872697477_7591897142205803185_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmh1ED2t58tyMHbuNMDlW3obmlEh4Ju8WhuaUSHgm7xR_AA44u2AJtbqkiLDAbOfFmbkrZ3F4L6hxnjp2ujLqe&_nc_ohc=mrzKJynFSpcQ7kNvwFYqeld&_nc_oc=AdoFrJ_Tz_11XoezSF4nbE_wG1e-RC9BkGyoRRLMhLKEX8ZROvCgO4M_9rXYW3W-Nn5sZJXZHPA9K-6KpzVK339b&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=3wC8DnMgRno3TxVzNgOUrQ&_nc_ss=7b2a8&oh=00_Af6lbRrEGHQnxLj6OU2dmY5RTN74404Dh72kTafqiHu54Q&oe=6A204765",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/660136472_1525824262697438_3071461596898733843_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGw3YJke1A1lX2sghmwmp0QCTDUE7FeTaoJMNQTsV5NqtqWT7xncAPDJLnVlpImqq3RWtxzaluNHJpORYUQiYpC&_nc_ohc=KQAGkyRNuaYQ7kNvwFvtB-I&_nc_oc=AdpWQXqJeUYMp66en9heQWFJRRpV4w1g8dKmiZScm7nTJN7ghFHPOSdTYu0FUXt4DYqHGFBYJapJxngHU4FWjp5L&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=duRveui7A2T0GR9lycfMTA&_nc_ss=7b2a8&oh=00_Af6RaQRYUnyDUpmWbZYF_uKEToSzpNqE_gpv6LIYMNNe9w&oe=6A2056FC",
];

const LOGOS_Exam = [
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/488922179_1222564196356781_2744549854540329894_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4JFZjUncUP-Fl9hug4Ae3Gycz5m9LJ6gbJzPmb0snqMLr6Ru_eaeCJ5Vgh6MIQAbkniAoR81DQuQ3zNy3kbGZ&_nc_ohc=PYedoSEq8ccQ7kNvwHpnOCh&_nc_oc=AdoBpOctYSqooIvv1ds49CWrIWPpH0J8YUHQ7GWZILaDmGLclJfmyCPHtdELYrajeAvuSFMXw_fPok-3_ieaR3vl&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=76DP7oUXpUe37zmWX8gnuA&_nc_ss=7b2a8&oh=00_Af5O37g0MVMBZ62qM09-95FPqAeyqTBfi-QrWsQJgZ5Rxg&oe=6A20534D",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/489037204_1222564223023445_125637894684685083_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGD9SgtLwKWF3_L21hvyMuQ1pRbWu8wmAPWlFta7zCYAxvgBsP3d-JuY9hV-Uw63616-fCcSv3bBAtVliZA6jSi&_nc_ohc=gLu36Rk3usIQ7kNvwFsbkaX&_nc_oc=AdqYhtOS28qw2lF-MefKac29nzTRvyQyZHgdSKY24wU6U3AHjXvJwCoUuMW5rnStBEnss5yCBNkB3Pqyn73YgFNF&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=usms86dAO9jdf70AlNYTtw&_nc_ss=7b2a8&oh=00_Af58__fPeZx5mE8dhf_8blx2xvKGKtPxPMzFDM1sqFCaSw&oe=6A205A27",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/489275522_1222564059690128_4554718232507754784_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrTG3qn2RSw0OS7MDX2TGIvDP6E2kDY2-8M_oTaQNjb4JeeJQy-FMozaYOQPTPRj_Na8AYW7ZcujUzZKVaN7dm&_nc_ohc=nugel4xarVwQ7kNvwFR2Rjw&_nc_oc=Adq4boi0Gf30t-CPgUou7gWdD_DDsIJ-gz1FOgKe3kv0fw40pNIL62aH2UVxqnqT_3FgPu2xbGMdIFBJGW_XlJQh&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=-LkKYtFJ16rRymKXjhNQGA&_nc_ss=7b2a8&oh=00_Af5gh3YTd1iPLbuoC3qVPcf6NOwfnsBrFA3Lv-NdjS1KTA&oe=6A20447E",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/489428979_1222564053023462_4503661545770343058_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4H2xX5udvYvT5UM2XGPDu-Bt4jmDiLXv4G3iOYOIte5wD59FZ6PnOBssyA69u2LOMyVQq7HSUupwZFwzLRELS&_nc_ohc=I4iP38myXhAQ7kNvwHgKV21&_nc_oc=AdqpG2uWxu5cUuXtyxo6xIkj8YtcDwnJ7n7YG-z0ywQWwpChUSV-go113zO86yEe4XwF9164DOIT4edjm9PcU-Yq&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=aVsesyNeVTOE21pXPH4jVA&_nc_ss=7b2a8&oh=00_Af6HOVf5fFDQxSfXfUotwqdv0a6Lri91nSCG54ixhh3Q_w&oe=6A2035F9",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/489693608_1222564079690126_1065668628252550095_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFRqOr2QHIW-xP53HYrR9_7iBdHgOucHRGIF0eA65wdEQRODzQSM-640GI9e_boxWtD_G7x6dErG43H_gDR1yiD&_nc_ohc=dr9gVVhPk6gQ7kNvwFK8C2t&_nc_oc=AdozVA7mWm7dw5P468AwH_tehRu1XK8B7Dir_wRglnC_fMAUtPJE46fC5wA8kP6QFANaid045N1ACdm80cC2OmjE&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=Z6ri8NSXWJsKRzF0PKAPSg&_nc_ss=7b2a8&oh=00_Af5b-iWMUlyM0XDZJS9dtC0NBh7zNb0RZyeWHc3A4QdjEg&oe=6A20622B",
  "https://scontent.fsgn17-1.fna.fbcdn.net/v/t39.30808-6/489786411_1222564113023456_5688099465627053293_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFhC5aiCSF2_tYmnlZ2kHE4GiccYEKj3JsaJxxgQqPcm5rxxJz1CxIIIiYjFFjvXKlTnJTuQx9ccK8ioxku8Ru_&_nc_ohc=6nBEse12cIwQ7kNvwHOs3OM&_nc_oc=Ado5Oy_tOW8Sw8rd11X8uh49EU7h4oV3o0lTTL5HY_m0NImkmHO03kj3UwLpuOon8MR1rh4dPjw61hyWXehJOFeK&_nc_zt=23&_nc_ht=scontent.fsgn17-1.fna&_nc_gid=OXeaTxK7XHNNyi341bM_sA&_nc_ss=7b2a8&oh=00_Af6ZeLIpD20SUuDlXQfjSmcAjrx54EwMZuL1_K0glSrk6g&oe=6A205FF8",
];

export function ActivitiesSection({ isDark }: ActivitiesSection_Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-center font-sans ${
          isDark ? "text-white" : "text-blue-950"
        }`}
      >
        Hoạt động
      </h2>
      <div className="mb-10">
        <LogoCarousel
          LOGOS={LOGOS_Workshop}
          direction="left"
          title="Workshop"
          isDark={isDark}
        />
        <LogoCarousel
          LOGOS={LOGOS_Game}
          direction="right"
          title="Game và tuyển sinh"
          isDark={isDark}
        />
        <LogoCarousel
          LOGOS={LOGOS_Exam}
          direction="left"
          title="Các cuộc thi"
          isDark={isDark}
        />
      </div>
    </section>
  );
}
