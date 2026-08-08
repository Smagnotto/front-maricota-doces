import { Provider } from '@angular/core';
import { environment } from 'src/environments/environment';

import { InsumoService } from 'src/app/pages/insumos/services/insumo.service';
import { InsumoJavaService } from 'src/app/pages/insumos/services/insumo-java.service';
import { InsumoSupabaseService } from 'src/app/pages/insumos/services/insumo-supabase.service';

import { ProdutoService } from 'src/app/pages/produto/services/produto.service';
import { ProdutoJavaService } from 'src/app/pages/produto/services/produto-java.service';
import { ProdutoSupabaseService } from 'src/app/pages/produto/services/produto-supabase.service';

import { ClienteService } from 'src/app/pages/clientes/services/cliente.service';
import { ClienteJavaService } from 'src/app/pages/clientes/services/cliente-java.service';
import { ClienteSupabaseService } from 'src/app/pages/clientes/services/cliente-supabase.service';

import { ConfiguracoesService } from 'src/app/pages/configuracoes/services/configuracoes.service';
import { ConfiguracoesJavaService } from 'src/app/pages/configuracoes/services/configuracoes-java.service';
import { ConfiguracoesSupabaseService } from 'src/app/pages/configuracoes/services/configuracoes-supabase.service';

import { LoginService } from 'src/app/pages/login/service/login.service';
import { LoginFirebaseService } from 'src/app/pages/login/service/login-firebase.service';
import { LoginSupabaseService } from 'src/app/pages/login/service/login-supabase.service';

const isSupabase = environment.backendType === 'supabase';

export const backendProviders: Provider[] = [
  {
    provide: InsumoService,
    useClass: isSupabase ? InsumoSupabaseService : InsumoJavaService,
  },
  {
    provide: ProdutoService,
    useClass: isSupabase ? ProdutoSupabaseService : ProdutoJavaService,
  },
  {
    provide: ClienteService,
    useClass: isSupabase ? ClienteSupabaseService : ClienteJavaService,
  },
  {
    provide: ConfiguracoesService,
    useClass: isSupabase ? ConfiguracoesSupabaseService : ConfiguracoesJavaService,
  },
  {
    provide: LoginService,
    useClass: isSupabase ? LoginSupabaseService : LoginFirebaseService,
  },
];
