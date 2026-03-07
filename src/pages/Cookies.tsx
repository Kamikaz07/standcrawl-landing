import PageLayout from '../components/PageLayout';

export default function Cookies() {
  return (
    <PageLayout
      title="Política de Cookies"
      subtitle="Como utilizamos cookies e tecnologias semelhantes."
    >
      <p>
        <strong>Última atualização:</strong> 7 de março de 2026
      </p>
      <p>
        A <strong>StandCrawlAI</strong> utiliza cookies e tecnologias semelhantes para proporcionar
        uma melhor experiência de utilização do nosso website e plataforma. Esta política explica
        o que são cookies, como os utilizamos e como pode geri-los.
      </p>

      <h2>1. O que são Cookies?</h2>
      <p>
        Cookies são pequenos ficheiros de texto armazenados no seu dispositivo (computador, tablet
        ou telemóvel) quando visita um website. Os cookies são amplamente utilizados para fazer os
        websites funcionarem corretamente, melhorar o desempenho, e fornecer informações aos
        proprietários do site.
      </p>

      <h2>2. Tipos de Cookies que Utilizamos</h2>

      <h3>2.1. Cookies Estritamente Necessários</h3>
      <div className="info-card">
        <p className="!mt-0">
          Estes cookies são essenciais para o funcionamento da plataforma e não podem ser
          desativados. São definidos em resposta a ações suas, como definir preferências de
          privacidade, iniciar sessão ou preencher formulários.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Cookie</th>
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Finalidade</th>
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Duração</th>
              </tr>
            </thead>
            <tbody className="text-[#9ca3af]">
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 font-mono text-xs">sc_session</td>
                <td className="py-2 px-3">Sessão do utilizador (JWT)</td>
                <td className="py-2 px-3">Sessão</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 font-mono text-xs">sc_refresh</td>
                <td className="py-2 px-3">Renovação automática de sessão</td>
                <td className="py-2 px-3">7 dias</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 font-mono text-xs">sc_csrf</td>
                <td className="py-2 px-3">Proteção contra ataques CSRF</td>
                <td className="py-2 px-3">Sessão</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono text-xs">sc_cookies_consent</td>
                <td className="py-2 px-3">Registo do consentimento de cookies</td>
                <td className="py-2 px-3">12 meses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>2.2. Cookies de Desempenho e Analítica</h3>
      <div className="info-card">
        <p className="!mt-0">
          Estes cookies permitem-nos contar visitas e fontes de tráfego para medir e melhorar
          o desempenho do nosso site. Ajudam-nos a saber quais as páginas mais e menos populares
          e a compreender como os visitantes navegam pelo site.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Cookie</th>
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Finalidade</th>
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Duração</th>
              </tr>
            </thead>
            <tbody className="text-[#9ca3af]">
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 font-mono text-xs">_cf_bm</td>
                <td className="py-2 px-3">Cloudflare Bot Management</td>
                <td className="py-2 px-3">30 minutos</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono text-xs">cf_clearance</td>
                <td className="py-2 px-3">Verificação de segurança Cloudflare</td>
                <td className="py-2 px-3">30 minutos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3>2.3. Cookies Funcionais</h3>
      <div className="info-card">
        <p className="!mt-0">
          Estes cookies permitem funcionalidades melhoradas e personalização, como o idioma
          preferido ou a região em que se encontra. Podem ser definidos por nós ou por fornecedores
          terceiros cujos serviços adicionámos às nossas páginas.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Cookie</th>
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Finalidade</th>
                <th className="py-2 px-3 text-left text-[#fafafa] font-semibold">Duração</th>
              </tr>
            </thead>
            <tbody className="text-[#9ca3af]">
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 font-mono text-xs">sc_theme</td>
                <td className="py-2 px-3">Preferência de tema visual</td>
                <td className="py-2 px-3">12 meses</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-mono text-xs">sc_sidebar</td>
                <td className="py-2 px-3">Estado da barra lateral (aberta/fechada)</td>
                <td className="py-2 px-3">30 dias</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>3. Cookies de Terceiros</h2>
      <p>
        A StandCrawlAI utiliza serviços de terceiros que podem colocar cookies no seu navegador:
      </p>
      <ul>
        <li><strong>Cloudflare:</strong> proteção DDoS, CDN e Web Application Firewall. Cookies de segurança essenciais.</li>
        <li><strong>Stripe:</strong> processamento de pagamentos. Cookies estritamente necessários para completar transações de forma segura.</li>
      </ul>
      <p>
        Não utilizamos cookies de redes sociais, publicidade comportamental ou plataformas de
        retargeting.
      </p>

      <h2>4. Consentimento</h2>
      <p>
        Ao visitar o nosso website pela primeira vez, será apresentado um banner de cookies
        solicitando o seu consentimento. Pode:
      </p>
      <ul>
        <li><strong>Aceitar todos os cookies</strong> — permite todos os tipos descritos acima.</li>
        <li><strong>Aceitar apenas os necessários</strong> — ativa somente os cookies estritamente necessários ao funcionamento.</li>
        <li><strong>Personalizar</strong> — escolher quais categorias de cookies deseja permitir.</li>
      </ul>
      <p>
        O seu consentimento é registado através do cookie <code className="text-xs bg-white/5 px-1.5 py-0.5 rounded font-mono">sc_cookies_consent</code> e
        é válido por 12 meses, altura em que será novamente solicitado.
      </p>

      <h2>5. Como Gerir Cookies</h2>
      <p>
        Pode gerir e eliminar cookies através das definições do seu navegador. Note que a desativação
        de cookies essenciais pode afetar o funcionamento da plataforma.
      </p>
      <h3>Instruções por Navegador</h3>
      <ul>
        <li><strong>Google Chrome:</strong> Definições → Privacidade e segurança → Cookies e outros dados do site</li>
        <li><strong>Mozilla Firefox:</strong> Definições → Privacidade e segurança → Cookies e dados do site</li>
        <li><strong>Safari:</strong> Preferências → Privacidade → Gerir dados do website</li>
        <li><strong>Microsoft Edge:</strong> Definições → Cookies e permissões do site → Cookies e dados armazenados</li>
      </ul>
      <p>
        Também pode utilizar as ferramentas de desenvolvimento do navegador (F12) para inspecionar e
        eliminar cookies individuais.
      </p>

      <h2>6. Tecnologias Semelhantes</h2>
      <p>
        Além de cookies, podemos utilizar as seguintes tecnologias:
      </p>
      <ul>
        <li><strong>Local Storage:</strong> para armazenar preferências da interface e dados de sessão no navegador. Pode ser limpo nas definições do navegador.</li>
        <li><strong>Session Storage:</strong> dados temporários que são automaticamente eliminados quando fecha o separador do navegador.</li>
      </ul>

      <h2>7. Alterações a esta Política</h2>
      <p>
        Podemos atualizar esta Política de Cookies periodicamente para refletir alterações nas nossas
        práticas ou por razões operacionais, legais ou regulatórias. A data de última atualização
        no topo desta página será sempre ajustada. Em caso de alterações significativas, notificaremos
        os utilizadores registados por email.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Para questões sobre esta Política de Cookies, contacte-nos:
      </p>
      <ul>
        <li><strong>Email:</strong> info@standcrawl.pt</li>
        <li><strong>Website:</strong> standcrawl.pt</li>
      </ul>
    </PageLayout>
  );
}
