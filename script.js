/*
     * ============================================================
     * CONFIGURAÇÃO CENTRAL DA BARBEARIA
     * ============================================================
     * Edite apenas os dados deste objeto para alterar os dados
     * gerais exibidos no site. Serviços e barbeiros estão logo
     * abaixo, em suas próprias listas.
     */
    const BARBERSHOP_CONFIG = {
      name: 'Nenê Barbearia',
      creatorName: 'Matheus Saturno',
      creatorUrl: 'https://github.com/MatheusSaturno',
      phoneDisplay: '(11) 4438-9021',
      whatsappDigits: '5511999999999',
      addressHtml: 'Rua Dom Pedro II, 1420 — Bairro Jardim<br/>Santo André - SP, CEP 09080-000',
      weekdaysHours: '09:00 às 20:00',
      saturdayHours: '08:30 às 18:00',
      sundayHours: 'Fechado',
      socialLinks: {
        instagram: 'https://instagram.com/',
        facebook: 'https://facebook.com/',
        tiktok: 'https://tiktok.com/'
      }
    };

    /*
     * ============================================================
     * LISTA DE SERVIÇOS
     * ============================================================
     * Para adicionar, remover ou alterar um serviço, edite um
     * objeto desta lista: id, nome, categoria, preço e duração.
     */
    // 1. DADOS DO CATÁLOGO DE CORTES E SERVIÇOS
    const SERVICES = [
      {
        id: 'degrade-navalhado',
        name: 'Degradê Navalhado (Skin Fade)',
        category: 'cortes',
        categoryLabel: 'Corte',
        price: 55.00,
        duration: 45,
        popular: true,
        description: 'Transição suave da pele zero na navalha até o topo, finalizado com pomada efeito matte ou brilho.',
        svgIcon: `<svg class="w-10 h-10 text-silver-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3v18M10 3v18M14 7v14M18 11v10" stroke-linecap="round"/></svg>`
      },
      {
        id: 'corte-social',
        name: 'Corte Social Clássico',
        category: 'cortes',
        categoryLabel: 'Corte',
        price: 45.00,
        duration: 40,
        popular: false,
        description: 'Corte tradicional alinhado na tesoura e máquina, ideal para o dia a dia executivo e elegante.',
        svgIcon: `<svg class="w-10 h-10 text-silver-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`
      },
      {
        id: 'corte-tesoura',
        name: 'Corte Visagista na Tesoura',
        category: 'cortes',
        categoryLabel: 'Corte',
        price: 60.00,
        duration: 50,
        popular: false,
        description: 'Texturização e caimento natural esculpidos 100% na tesoura conforme o formato do seu rosto.',
        svgIcon: `<svg class="w-10 h-10 text-silver-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20L20 4M15 4h5v5M9 15l-5 5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      },
      {
        id: 'barba-terapia',
        name: 'Barba Terapia com Toalha Quente',
        category: 'barba',
        categoryLabel: 'Barba',
        price: 45.00,
        duration: 35,
        popular: true,
        description: 'Alinhamento completo na navalha, vapor de ozônio, toalha quente aromatizada e óleo hidratante.',
        svgIcon: `<svg class="w-10 h-10 text-silver-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 10c0 5 3 9 7 9s7-4 7-9" stroke-linecap="round"/><path d="M8 10h8M9 14h6" stroke-linecap="round"/></svg>`
      },
      {
        id: 'combo-corte-barba',
        name: 'Combo Nenê (Corte + Barba)',
        category: 'combos',
        categoryLabel: 'Combo',
        price: 85.00,
        duration: 75,
        popular: true,
        description: 'Nosso carro-chefe: qualquer estilo de corte + barba terapia completa com toalha quente e acabamento na navalha.',
        svgIcon: `<svg class="w-10 h-10 text-silver-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      },
      {
        id: 'acabamento-pezinho',
        name: 'Acabamento / Pezinho & Sobrancelha',
        category: 'combos',
        categoryLabel: 'Manutenção',
        price: 25.00,
        duration: 20,
        popular: false,
        description: 'Manutenção rápida dos contornos na navalha e limpeza natural das sobrancelhas.',
        svgIcon: `<svg class="w-10 h-10 text-silver-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l6-6 4 4 8-8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      }
    ];

    /*
     * ============================================================
     * LISTA DE BARBEIROS
     * ============================================================
     * Cada objeto representa um profissional disponível no site.
     */
    const BARBERS = [
      { id: 'nene', name: 'Mestre Nenê', role: 'Fundador • Clássicos & Navalha', rating: '5.0', initials: 'MN' },
      { id: 'rafael', name: 'Rafael Costa', role: 'Especialista em Degradê & Freestyle', rating: '4.9', initials: 'RC' },
      { id: 'lucas', name: 'Lucas Almeida', role: 'Visagismo & Barba Terapia', rating: '4.9', initials: 'LA' }
    ];

    // Horários padrão de funcionamento
    const TIME_SLOTS = [
      '09:00', '10:00', '11:00', '12:00',
      '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
    ];

    // Estado da Aplicação
    let state = {
      selectedCategory: 'todos',
      selectedServiceId: SERVICES[4].id,
      selectedBarberId: BARBERS[0].id,
      selectedDate: '',
      selectedTime: '',
      bookings: [],
      barbershopWhatsapp: BARBERSHOP_CONFIG.whatsappDigits
    };

    // Chaves de armazenamento local
    const STORAGE_KEY = 'nene_barbearia_bookings_v1';
    const WA_STORAGE_KEY = 'nene_barbearia_whatsapp_v1';
    const DEFAULT_WA_NUMBER = BARBERSHOP_CONFIG.whatsappDigits;

    // ==================== INICIALIZAÇÃO ====================
    document.addEventListener('DOMContentLoaded', () => {
      syncBarbershopInfo();
      loadWhatsappConfig();
      loadBookingsFromStorage();
      renderCatalog();
      populateServiceSelect();
      renderBarbers();
      generateUpcomingDates();
      renderTimeSlots();
      updateSummary();
      updateBadges();
      setupEventListeners();
    });

    /*
     * Aplica os dados centralizados da barbearia nos elementos da página.
     * Isso evita manter endereço, redes sociais e horários em vários lugares.
     */
    function syncBarbershopInfo() {
      const address = document.getElementById('barbershop-address');
      const phone = document.getElementById('barbershop-phone');
      const weekdays = document.getElementById('hours-weekdays');
      const saturday = document.getElementById('hours-saturday');
      const sunday = document.getElementById('hours-sunday');
      const copyrightText = document.getElementById('copyright-text');
      const creatorLink = document.getElementById('creator-link');

      if (address) address.innerHTML = BARBERSHOP_CONFIG.addressHtml;
      if (phone) phone.textContent = BARBERSHOP_CONFIG.phoneDisplay;
      if (weekdays) weekdays.textContent = BARBERSHOP_CONFIG.weekdaysHours;
      if (saturday) saturday.textContent = BARBERSHOP_CONFIG.saturdayHours;
      if (sunday) sunday.textContent = BARBERSHOP_CONFIG.sundayHours;
      if (copyrightText) {
        copyrightText.textContent = `© ${new Date().getFullYear()} ${BARBERSHOP_CONFIG.name}. Todos os direitos reservados.`;
      }
      if (creatorLink) {
        creatorLink.href = BARBERSHOP_CONFIG.creatorUrl;
        creatorLink.textContent = `Desenvolvido por ${BARBERSHOP_CONFIG.creatorName}`;
      }

      const socialElements = {
        'social-instagram': BARBERSHOP_CONFIG.socialLinks.instagram,
        'social-facebook': BARBERSHOP_CONFIG.socialLinks.facebook,
        'social-tiktok': BARBERSHOP_CONFIG.socialLinks.tiktok
      };

      Object.entries(socialElements).forEach(([id, link]) => {
        const element = document.getElementById(id);
        if (element) element.href = link;
      });
    }

    function loadWhatsappConfig() {
      try {
        const savedWa = localStorage.getItem(WA_STORAGE_KEY);
        if (savedWa && /^\d{12,15}$/.test(savedWa)) {
          state.barbershopWhatsapp = savedWa;
        } else {
          state.barbershopWhatsapp = DEFAULT_WA_NUMBER;
        }
      } catch (err) {
        state.barbershopWhatsapp = DEFAULT_WA_NUMBER;
      }
      syncWhatsappUI();
    }

    function syncWhatsappUI() {
      const formatted = formatBrazilianPhoneDisplay(state.barbershopWhatsapp);
      const activeLabel = document.getElementById('active-barber-wa-label');
      const footerDisplay = document.getElementById('footer-wa-display');
      const floatingBtn = document.getElementById('floating-whatsapp-btn');

      if (activeLabel) activeLabel.textContent = formatted;
      if (footerDisplay) footerDisplay.textContent = formatted;
      if (floatingBtn) {
        const quickMsg = encodeURIComponent('Olá, Nenê Barbearia! Gostaria de tirar uma dúvida sobre horários.');
        floatingBtn.href = `https://wa.me/${state.barbershopWhatsapp}?text=${quickMsg}`;
      }
    }

    function formatBrazilianPhoneDisplay(rawDigits) {
      const d = String(rawDigits).replace(/\D/g, '');
      if (d.length === 13 && d.startsWith('55')) {
        return `+55 (${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`;
      }
      if (d.length === 12 && d.startsWith('55')) {
        return `+55 (${d.slice(2, 4)}) ${d.slice(4, 8)}-${d.slice(8)}`;
      }
      return `+${d}`;
    }

    function loadBookingsFromStorage() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          state.bookings = JSON.parse(saved);
        } else {
          const todayIso = getUpcomingDays(1)[0].iso;
          state.bookings = [
            {
              id: 'demo-1',
              code: 'NB-1001',
              serviceId: 'degrade-navalhado',
              serviceName: 'Degradê Navalhado (Skin Fade)',
              price: 55,
              duration: 45,
              barberId: 'nene',
              barberName: 'Mestre Nenê',
              date: todayIso,
              dateLabel: getUpcomingDays(1)[0].fullLabel,
              time: '10:00',
              clientName: 'Cliente Reservado',
              clientPhone: '(11) 90000-0000',
              isDemo: true
            },
            {
              id: 'demo-2',
              code: 'NB-1002',
              serviceId: 'combo-corte-barba',
              serviceName: 'Combo Nenê (Corte + Barba)',
              price: 85,
              duration: 75,
              barberId: 'rafael',
              barberName: 'Rafael Costa',
              date: todayIso,
              dateLabel: getUpcomingDays(1)[0].fullLabel,
              time: '15:00',
              clientName: 'Cliente Reservado',
              clientPhone: '(11) 90000-0000',
              isDemo: true
            }
          ];
          saveBookingsToStorage();
        }
      } catch (err) {
        console.error('Erro ao ler localStorage:', err);
        state.bookings = [];
      }
    }

    function saveBookingsToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.bookings));
      } catch (err) {
        console.error('Erro ao salvar no localStorage:', err);
      }
    }

    // ==================== RENDERIZAÇÃO DO CATÁLOGO ====================
    function renderCatalog() {
      const grid = document.getElementById('services-grid');
      const filtered = state.selectedCategory === 'todos'
        ? SERVICES
        : SERVICES.filter(s => s.category === state.selectedCategory);

      grid.innerHTML = filtered.map(service => `
        <article class="group bg-charcoal hover:bg-graphite border border-silver-300/15 hover:border-silver-200/45 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg relative overflow-hidden">
          ${service.popular ? `
            <span class="absolute top-4 right-4 px-3 py-1 rounded-full bg-silver-200/15 border border-silver-300/30 text-silver-200 text-[11px] font-serif font-bold uppercase tracking-wider">
              Mais Pedido
            </span>
          ` : ''}

          <div>
            <!-- Ícone Estilizado -->
            <div class="w-16 h-16 rounded-2xl bg-obsidian border border-silver-300/15 group-hover:border-silver-200/40 flex items-center justify-center mb-5 transition-colors">
              ${service.svgIcon}
            </div>

            <div class="flex items-center gap-2 text-xs text-silver-400 mb-1.5">
              <span class="uppercase tracking-wider font-serif font-bold text-silver-200">${service.categoryLabel}</span>
              <span>•</span>
              <span class="flex items-center gap-1"><i class="fa-regular fa-clock"></i> ${service.duration} min</span>
            </div>

            <h3 class="font-serif text-xl font-bold text-silver-100 group-hover:text-white transition-colors">
              ${service.name}
            </h3>

            <p class="text-sm text-silver-400 mt-2.5 leading-relaxed">
              ${service.description}
            </p>
          </div>

          <div class="pt-6 mt-6 border-t border-silver-300/15 flex items-center justify-between gap-4">
            <div>
              <span class="text-xs text-silver-400 block">Valor</span>
              <span class="font-serif text-2xl font-bold text-silver-100">${formatCurrency(service.price)}</span>
            </div>

            <button onclick="selectServiceAndScroll('${service.id}')" class="px-4 py-3 rounded-xl bg-obsidian hover:bg-silver-200 text-silver-200 hover:text-obsidian border border-silver-300/35 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2">
              <span>Selecionar para Agendar</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </article>
      `).join('');
    }

    function selectServiceAndScroll(serviceId) {
      state.selectedServiceId = serviceId;
      const selectEl = document.getElementById('service-select');
      selectEl.value = serviceId;
      updateSummary();

      const bookingSection = document.getElementById('agendamento');
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      showToast('Serviço selecionado! Escolha agora o barbeiro e horário.');
    }

    // ==================== COMPONENTES DO AGENDAMENTO ====================
    function populateServiceSelect() {
      const select = document.getElementById('service-select');
      select.innerHTML = SERVICES.map(s => `
        <option value="${s.id}" ${s.id === state.selectedServiceId ? 'selected' : ''}>
          ${s.name} — ${formatCurrency(s.price)} (${s.duration} min)
        </option>
      `).join('');
    }

    function renderBarbers() {
      const container = document.getElementById('barbers-grid');
      container.innerHTML = BARBERS.map(barber => {
        const isSelected = barber.id === state.selectedBarberId;
        return `
          <button type="button" onclick="selectBarber('${barber.id}')" class="text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
            isSelected
              ? 'bg-silver-200/15 border-silver-200 text-white shadow-md shadow-white/5'
              : 'bg-graphite border-silver-300/15 text-silver-300 hover:border-silver-300/35'
          }">
            <div class="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center font-serif font-bold text-sm ${
              isSelected ? 'btn-silver-metallic text-obsidian' : 'bg-obsidian text-silver-200 border border-silver-300/20'
            }">
              ${barber.initials}
            </div>
            <div class="min-w-0">
              <p class="font-semibold text-sm truncate">${barber.name}</p>
              <p class="text-[11px] text-silver-400 truncate">${barber.role}</p>
              <span class="text-[11px] text-silver-200 font-semibold"><i class="fa-solid fa-star text-[10px]"></i> ${barber.rating}</span>
            </div>
          </button>
        `;
      }).join('');
    }

    function selectBarber(barberId) {
      state.selectedBarberId = barberId;
      state.selectedTime = '';
      renderBarbers();
      renderTimeSlots();
      updateSummary();
    }

    function getUpcomingDays(count = 7) {
      const days = [];
      const weekNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      let cursor = new Date();

      while (days.length < count) {
        if (cursor.getDay() !== 0) {
          const yyyy = cursor.getFullYear();
          const mm = String(cursor.getMonth() + 1).padStart(2, '0');
          const dd = String(cursor.getDate()).padStart(2, '0');
          const iso = `${yyyy}-${mm}-${dd}`;
          const isToday = days.length === 0 && cursor.toDateString() === new Date().toDateString();

          days.push({
            iso,
            dayName: isToday ? 'Hoje' : weekNames[cursor.getDay()],
            dayNumber: dd,
            monthName: monthNames[cursor.getMonth()],
            fullLabel: `${dd}/${mm}/${yyyy} (${weekNames[cursor.getDay()]})`
          });
        }
        cursor.setDate(cursor.getDate() + 1);
      }
      return days;
    }

    function generateUpcomingDates() {
      const days = getUpcomingDays(7);
      if (!state.selectedDate) {
        state.selectedDate = days[0].iso;
      }

      const container = document.getElementById('date-selector');
      container.innerHTML = days.map(d => {
        const isSelected = d.iso === state.selectedDate;
        return `
          <button type="button" onclick="selectDate('${d.iso}')" class="py-3 px-2 rounded-2xl border text-center transition-all ${
            isSelected
              ? 'btn-silver-metallic border-white font-bold'
              : 'bg-graphite text-silver-300 border-silver-300/15 hover:border-silver-300/35'
          }">
            <span class="block text-[11px] uppercase tracking-wider ${isSelected ? 'text-obsidian/80' : 'text-silver-400'}">${d.dayName}</span>
            <span class="block font-serif text-lg font-bold my-0.5">${d.dayNumber}</span>
            <span class="block text-[10px] ${isSelected ? 'text-obsidian/80' : 'text-silver-500'}">${d.monthName}</span>
          </button>
        `;
      }).join('');
    }

    function selectDate(isoDate) {
      state.selectedDate = isoDate;
      state.selectedTime = '';
      generateUpcomingDates();
      renderTimeSlots();
      updateSummary();
    }

    function renderTimeSlots() {
      const container = document.getElementById('time-slots-grid');

      const occupiedTimes = state.bookings
        .filter(b => b.barberId === state.selectedBarberId && b.date === state.selectedDate)
        .map(b => b.time);

      container.innerHTML = TIME_SLOTS.map(time => {
        const isOccupied = occupiedTimes.includes(time);
        const isSelected = state.selectedTime === time;

        if (isOccupied) {
          return `
            <button type="button" disabled class="py-3 px-2 rounded-xl bg-red-950/40 border border-red-500/25 text-red-400/70 text-sm font-medium cursor-not-allowed line-through flex items-center justify-center gap-1" title="Horário já reservado">
              <span>${time}</span>
            </button>
          `;
        }

        return `
          <button type="button" onclick="selectTime('${time}')" class="py-3 px-2 rounded-xl text-sm font-semibold border transition-all ${
            isSelected
              ? 'btn-silver-metallic border-white font-bold'
              : 'bg-graphite hover:bg-white/10 text-silver-200 border-silver-300/15'
          }">
            ${time}
          </button>
        `;
      }).join('');
    }

    function selectTime(time) {
      state.selectedTime = time;
      renderTimeSlots();
      updateSummary();
      hideFormError();
    }

    function updateSummary() {
      const service = SERVICES.find(s => s.id === state.selectedServiceId) || SERVICES[0];
      const barber = BARBERS.find(b => b.id === state.selectedBarberId) || BARBERS[0];
      const dayObj = getUpcomingDays(7).find(d => d.iso === state.selectedDate);

      document.getElementById('summary-service').textContent = service.name;
      document.getElementById('summary-duration').innerHTML = `<i class="fa-regular fa-clock text-silver-300"></i> ${service.duration} min`;
      document.getElementById('summary-barber').textContent = barber.name;
      document.getElementById('summary-date').textContent = dayObj ? dayObj.fullLabel : '—';
      document.getElementById('summary-time').textContent = state.selectedTime || 'Selecione um horário';
      document.getElementById('summary-price').textContent = formatCurrency(service.price);
    }

    // ==================== EVENTOS E SUBMISSÃO ====================
    function setupEventListeners() {
      // Filtros do catálogo
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'btn-silver-metallic', 'font-bold');
            b.classList.add('bg-graphite', 'text-silver-300', 'border', 'border-silver-300/15', 'font-semibold');
          });
          btn.classList.add('active', 'btn-silver-metallic', 'font-bold');
          btn.classList.remove('bg-graphite', 'text-silver-300', 'border', 'border-silver-300/15', 'font-semibold');

          state.selectedCategory = btn.dataset.category;
          renderCatalog();
        });
      });

      // Mudança no select de serviços
      document.getElementById('service-select').addEventListener('change', (e) => {
        state.selectedServiceId = e.target.value;
        updateSummary();
      });

      // Máscara automática para telefone brasileiro
      document.getElementById('client-phone').addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        if (v.length > 6) {
          e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
        } else if (v.length > 2) {
          e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`;
        } else if (v.length > 0) {
          e.target.value = `(${v}`;
        }
      });

      // Submissão do formulário de agendamento (botão padrão)
      document.getElementById('booking-form').addEventListener('submit', (e) => {
        e.preventDefault();
        submitBooking(false);
      });

      // Formulário de configuração do WhatsApp da barbearia
      document.getElementById('wa-config-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('barbershop-wa-input');
        const digits = input.value.replace(/\D/g, '');
        const errorEl = document.getElementById('wa-config-error');

        if (digits.length < 12 || digits.length > 15) {
          errorEl.classList.remove('hidden');
          return;
        }

        errorEl.classList.add('hidden');
        state.barbershopWhatsapp = digits;
        try {
          localStorage.setItem(WA_STORAGE_KEY, digits);
        } catch (err) {
          console.error(err);
        }
        syncWhatsappUI();
        closeWhatsappConfigModal();
        showToast('Número de WhatsApp da Nenê Barbearia atualizado!');
      });

      // Menu Mobile Toggle
      document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
      });
    }

    function closeMobileMenu() {
      document.getElementById('mobile-menu').classList.add('hidden');
    }

    function buildWhatsappBookingUrl(booking, type = 'confirm') {
      let text = '';
      if (type === 'cancel') {
        text =
          `❌ *CANCELAMENTO DE AGENDAMENTO*\n` +
          `*Nenê BARBEARIA*\n\n` +
          `🔖 *Código da Reserva:* ${booking.code || booking.id}\n` +
          `👤 *Cliente:* ${booking.clientName}\n` +
          `📱 *Telefone:* ${booking.clientPhone}\n` +
          `✂️ *Serviço:* ${booking.serviceName}\n` +
          `💈 *Barbeiro:* ${booking.barberName}\n` +
          `📅 *Data:* ${booking.dateLabel}\n` +
          `⏰ *Horário:* ${booking.time}\n\n` +
          `_Olá! Informo o cancelamento deste horário para liberar a agenda._`;
      } else {
        const headerTitle = type === 'resend'
          ? `🔁 *REENVIO DE COMPROVANTE DE AGENDAMENTO*`
          : `✅ *NOVO AGENDAMENTO CONFIRMADO*`;

        text =
          `${headerTitle}\n` +
          `*Nenê BARBEARIA*\n\n` +
          `🔖 *Código da Reserva:* ${booking.code || booking.id}\n` +
          `👤 *Cliente:* ${booking.clientName}\n` +
          `📱 *Telefone:* ${booking.clientPhone}\n` +
          `✂️ *Serviço:* ${booking.serviceName}\n` +
          `⏳ *Duração:* ${booking.duration} min\n` +
          `💰 *Valor:* ${formatCurrency(booking.price)}\n` +
          `💈 *Barbeiro:* ${booking.barberName}\n` +
          `📅 *Data:* ${booking.dateLabel}\n` +
          `⏰ *Horário:* ${booking.time}\n\n` +
          `_Aguardo confirmação. Obrigado!_`;
      }

      return `https://wa.me/${state.barbershopWhatsapp}?text=${encodeURIComponent(text)}`;
    }

    function submitBooking(openWhatsappImmediately = false) {
      const clientName = document.getElementById('client-name').value.trim();
      const clientPhone = document.getElementById('client-phone').value.trim();

      if (!state.selectedTime) {
        showFormError('Por favor, selecione um horário disponível na grade acima.');
        return;
      }
      if (clientName.length < 3) {
        showFormError('Por favor, informe seu nome completo.');
        return;
      }
      if (clientPhone.replace(/\D/g, '').length < 10) {
        showFormError('Por favor, informe um número de WhatsApp válido com DDD.');
        return;
      }

      hideFormError();

      const service = SERVICES.find(s => s.id === state.selectedServiceId);
      const barber = BARBERS.find(b => b.id === state.selectedBarberId);
      const dayObj = getUpcomingDays(7).find(d => d.iso === state.selectedDate);
      const randomCode = 'NB-' + Math.floor(1000 + Math.random() * 9000);

      const newBooking = {
        id: 'ag-' + Date.now(),
        code: randomCode,
        serviceId: service.id,
        serviceName: service.name,
        price: service.price,
        duration: service.duration,
        barberId: barber.id,
        barberName: barber.name,
        date: state.selectedDate,
        dateLabel: dayObj ? dayObj.fullLabel : state.selectedDate,
        time: state.selectedTime,
        clientName,
        clientPhone,
        isDemo: false
      };

      state.bookings.push(newBooking);
      saveBookingsToStorage();

      state.selectedTime = '';
      document.getElementById('client-name').value = '';
      document.getElementById('client-phone').value = '';
      renderTimeSlots();
      updateSummary();
      updateBadges();

      openConfirmationModal(newBooking);

      if (openWhatsappImmediately) {
        const waUrl = buildWhatsappBookingUrl(newBooking, 'confirm');
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }

    function showFormError(msg) {
      const box = document.getElementById('form-error-box');
      document.getElementById('form-error-text').textContent = msg;
      box.classList.remove('hidden');
    }

    function hideFormError() {
      document.getElementById('form-error-box').classList.add('hidden');
    }

    // ==================== MODAIS E GERENCIAMENTO ====================
    function openConfirmationModal(booking) {
      const detailsEl = document.getElementById('confirmation-details');
      detailsEl.innerHTML = `
        <div class="flex justify-between"><span class="text-silver-400">Código:</span> <span class="font-mono font-bold text-silver-100">${booking.code || booking.id}</span></div>
        <div class="flex justify-between"><span class="text-silver-400">Cliente:</span> <span class="font-semibold text-silver-100">${escapeHtml(booking.clientName)}</span></div>
        <div class="flex justify-between"><span class="text-silver-400">Serviço:</span> <span class="font-semibold text-silver-200 text-right">${booking.serviceName}</span></div>
        <div class="flex justify-between"><span class="text-silver-400">Profissional:</span> <span class="text-silver-100">${booking.barberName}</span></div>
        <div class="flex justify-between"><span class="text-silver-400">Data e Hora:</span> <span class="font-bold text-silver-100">${booking.dateLabel} às ${booking.time}</span></div>
        <div class="flex justify-between pt-2 border-t border-silver-300/15"><span class="text-silver-400">Valor:</span> <span class="font-serif font-bold text-lg text-silver-100">${formatCurrency(booking.price)}</span></div>
      `;

      document.getElementById('whatsapp-receipt-link').href = buildWhatsappBookingUrl(booking, 'confirm');
      document.getElementById('confirmation-modal').classList.remove('hidden');
    }

    function closeConfirmationModal() {
      document.getElementById('confirmation-modal').classList.add('hidden');
    }

    function openWhatsappConfigModal() {
      document.getElementById('barbershop-wa-input').value = state.barbershopWhatsapp;
      document.getElementById('wa-config-error').classList.add('hidden');
      document.getElementById('wa-config-modal').classList.remove('hidden');
    }

    function closeWhatsappConfigModal() {
      document.getElementById('wa-config-modal').classList.add('hidden');
    }

    function resetDefaultWhatsapp() {
      state.barbershopWhatsapp = DEFAULT_WA_NUMBER;
      document.getElementById('barbershop-wa-input').value = DEFAULT_WA_NUMBER;
      document.getElementById('wa-config-error').classList.add('hidden');
      try {
        localStorage.setItem(WA_STORAGE_KEY, DEFAULT_WA_NUMBER);
      } catch (err) {
        console.error(err);
      }
      syncWhatsappUI();
      showToast('Número padrão restaurado!');
    }

    function openMyBookingsModal() {
      renderMyBookingsList();
      document.getElementById('my-bookings-modal').classList.remove('hidden');
    }

    function closeMyBookingsModal() {
      document.getElementById('my-bookings-modal').classList.add('hidden');
    }

    function renderMyBookingsList() {
      const container = document.getElementById('my-bookings-list');
      const userBookings = state.bookings.filter(b => !b.isDemo);

      if (userBookings.length === 0) {
        container.innerHTML = `
          <div class="text-center py-10 px-4 bg-obsidian/60 rounded-2xl border border-silver-300/10">
            <i class="fa-regular fa-calendar-xmark text-3xl text-silver-500 mb-3"></i>
            <p class="text-silver-300 font-medium">Você ainda não possui horários marcados.</p>
            <p class="text-xs text-silver-500 mt-1">Escolha um serviço e reserve sua cadeira agora mesmo.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = userBookings.map(b => {
        const resendUrl = buildWhatsappBookingUrl(b, 'resend');
        return `
          <div class="bg-obsidian border border-silver-300/15 rounded-2xl p-4 space-y-3">
            <div class="flex items-start justify-between gap-2">
              <div class="space-y-1">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2 py-0.5 rounded bg-silver-200/15 text-silver-100 text-xs font-bold">${b.time}</span>
                  <span class="text-xs text-silver-400">${b.dateLabel}</span>
                  <span class="text-[11px] font-mono text-silver-500">#${b.code || b.id}</span>
                </div>
                <h4 class="font-semibold text-silver-100 text-sm">${b.serviceName}</h4>
                <p class="text-xs text-silver-400">Barbeiro: <strong class="text-silver-200">${b.barberName}</strong> • Cliente: ${escapeHtml(b.clientName)}</p>
              </div>
              <span class="text-sm font-serif font-bold text-silver-100 whitespace-nowrap">${formatCurrency(b.price)}</span>
            </div>

            <div class="pt-2.5 border-t border-silver-300/15 flex flex-wrap items-center gap-2">
              <a href="${resendUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 min-w-[145px] py-2 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span>Reenviar no WhatsApp</span>
              </a>

              <button onclick="cancelBookingViaWhatsapp('${b.id}')" class="flex-1 min-w-[145px] py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-ban"></i>
                <span>Cancelar via WhatsApp</span>
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    function cancelBookingViaWhatsapp(bookingId) {
      const targetBooking = state.bookings.find(b => b.id === bookingId);
      if (!targetBooking) return;

      const cancelUrl = buildWhatsappBookingUrl(targetBooking, 'cancel');

      state.bookings = state.bookings.filter(b => b.id !== bookingId);
      saveBookingsToStorage();
      renderMyBookingsList();
      renderTimeSlots();
      updateBadges();

      window.open(cancelUrl, '_blank', 'noopener,noreferrer');
      showToast('Agendamento cancelado e aviso preparado no WhatsApp!');
    }

    function updateBadges() {
      const count = state.bookings.filter(b => !b.isDemo).length;
      const headerBadge = document.getElementById('header-badge-count');
      const sectionBadge = document.getElementById('section-badge-count');

      sectionBadge.textContent = count;
      if (count > 0) {
        headerBadge.textContent = count;
        headerBadge.classList.remove('hidden');
      } else {
        headerBadge.classList.add('hidden');
      }
    }

    // ==================== UTILITÁRIOS ====================
    function formatCurrency(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    let toastTimeout;
    function showToast(message) {
      const toast = document.getElementById('toast-notification');
      document.getElementById('toast-message').textContent = message;
      toast.classList.remove('hidden');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add('hidden');
      }, 3200);
    }
